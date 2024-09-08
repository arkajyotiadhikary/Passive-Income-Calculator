import { json } from '@remix-run/node';

const REFERRAL_PAYOUT_RATE = 0.20;
const CHURN_RATE = 0.02;
const FEE_PER_NEW_PROJECT = 95;
const FEE_PER_EXISTING_PROJECT = 0.25;
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

interface ICalculateRevenue {
  referredCustomersPerMonth: number;
  avgNewProjectsPerMonth: number;
  avgExistingProjects: number;
}

const monthlyRevenue = (newProjects: number, existingProjects: number) => newProjects * FEE_PER_NEW_PROJECT + existingProjects * FEE_PER_EXISTING_PROJECT;

const calculateRevenue = ({
  referredCustomersPerMonth,
  avgNewProjectsPerMonth,
  avgExistingProjects
}: ICalculateRevenue) => {
  let totalCustomers = referredCustomersPerMonth;
  let totalRevenue = 0;
  let monthlyRevenues: { month: string, income: number }[] = [];

  const currentMonthIndex = new Date().getMonth();

  // Calculate revenues for next 12 monthls 
  for (let month = 0; month < 12; month++) {
    const newProjects = avgNewProjectsPerMonth;
    const existingProjects = avgExistingProjects + month * avgNewProjectsPerMonth;

    const revenueForThisMonth = totalCustomers * monthlyRevenue(newProjects, existingProjects);
    totalRevenue += revenueForThisMonth;

    const incomeForThisMonth = revenueForThisMonth * REFERRAL_PAYOUT_RATE;
    const monthName = months[(currentMonthIndex + month) % 12];

    monthlyRevenues.push({ month: monthName, income: incomeForThisMonth });


    totalCustomers = totalCustomers * (1 - CHURN_RATE);
  }

  return {
    totalRevenue,
    monthlyRevenues
  }
}

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const referredCustomersPerMonth = Number(url.searchParams.get('referredCustomersPerMonth'));
  const avgNewProjectsPerMonth = Number(url.searchParams.get("avgNewProjectsPerMonth"));
  const avgExistingProjects = Number(url.searchParams.get("avgExistingProjects"));

  const result = calculateRevenue({
    referredCustomersPerMonth,
    avgNewProjectsPerMonth,
    avgExistingProjects,
  });

  return json(result);
}
