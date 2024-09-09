import { json } from "@remix-run/node";

const REFERRAL_PAYOUT_RATE = 0.2;
const CHURN_RATE = 0.02;
const FEE_PER_NEW_PROJECT = 95;
const FEE_PER_EXISTING_PROJECT = 0.25;
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

interface ICalculateRevenue {
      referredCustomersPerMonth: number;
      avgNewProjectsPerMonth: number;
      avgExistingProjects: number;
}

const monthlyRevenue = (newProjects: number, existingProjects: number) =>
      Math.floor(newProjects * FEE_PER_NEW_PROJECT + existingProjects * FEE_PER_EXISTING_PROJECT);

const calculateRevenue = ({
      referredCustomersPerMonth,
      avgNewProjectsPerMonth,
      avgExistingProjects,
}: ICalculateRevenue): {
      totalRevenue: number;
      monthlyRevenues: { month: string; income: number }[];
} => {
      let totalCustomers = referredCustomersPerMonth;
      let totalRevenue = 0;
      const monthlyRevenues: { month: string; income: number }[] = [];

      const currentMonthIndex = new Date().getMonth();

      // Calculate revenues for next 12 months
      for (let month = 0; month < 12; month++) {
            const newProjects = avgNewProjectsPerMonth;
            const existingProjects = avgExistingProjects + month * avgNewProjectsPerMonth;

            const revenueForThisMonth =
                  totalCustomers * monthlyRevenue(newProjects, existingProjects);
            totalRevenue += revenueForThisMonth;

            const incomeForThisMonth = Math.floor(revenueForThisMonth * REFERRAL_PAYOUT_RATE);
            const monthName = months[(currentMonthIndex + month) % 12];

            monthlyRevenues.push({ month: monthName, income: incomeForThisMonth });

            totalCustomers = totalCustomers * (1 - CHURN_RATE) + referredCustomersPerMonth;
      }

      totalRevenue = Math.floor(totalRevenue);

      return {
            totalRevenue,
            monthlyRevenues,
      };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function loader({ request }: any) {
      const url = new URL(request.url);
      const referredCustomersPerMonth = Number(url.searchParams.get("referredCustomersPerMonth"));
      const avgNewProjectsPerMonth = Number(url.searchParams.get("avgNewProjectsPerMonth"));
      const avgExistingProjects = Number(url.searchParams.get("avgExistingProjects"));

      if (
            isNaN(referredCustomersPerMonth) ||
            isNaN(avgNewProjectsPerMonth) ||
            isNaN(avgExistingProjects)
      ) {
            return json({ error: "Invalid input parameters" }, { status: 400 });
      }

      const result = calculateRevenue({
            referredCustomersPerMonth,
            avgNewProjectsPerMonth,
            avgExistingProjects,
      });

      return json(result);
}
