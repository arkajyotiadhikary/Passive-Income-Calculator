import { useState, useEffect } from "react";
import { Skeleton } from "@chakra-ui/react";

import axios from "axios";

import CustomSlider from "../components/CustomSlider";
import CustomGraph from "../components/CustomGraph";

import type { MetaFunction } from "@remix-run/node";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const meta: MetaFunction = () => {
      return [
            { title: "Passive Income Calculator" },
            { name: "description", content: "A calculator that calculate passive income" },
      ];
};

export default function Index() {
      const [referrals, setReferrals] = useState(1);
      const [newProjects, setNewProjects] = useState(10);
      const [existingProject, setExistingProjects] = useState(300);
      const [loading, setLoading] = useState(false);
      const [chartData, setChartData] = useState<{ month: string; income: number }[]>([]);
      const [totalRevenue, setTotalRevenue] = useState(0);

      const handleCalculate = async (
            referredCustomers: number,
            avgNewProjects: number,
            avgExistingProjects: number
      ) => {
            setLoading(true);
            const response = await axios.get("/api/calculate", {
                  params: {
                        referredCustomersPerMonth: referredCustomers,
                        avgNewProjectsPerMonth: avgNewProjects,
                        avgExistingProjects,
                  },
            });
            setChartData(response.data.monthlyRevenues);
            setTotalRevenue(response.data.totalRevenue);
            setLoading(false);
      };

      useEffect(() => {
            handleCalculate(referrals, newProjects, existingProject);
      }, [referrals, newProjects, existingProject]);

      return (
            <div className="p-20">
                  <header className="flex justify-center">
                        <h1 className="font-sans font-bold text-5xl mb-5 w-[40rem] text-center">
                              Calculate Your Recurring Passive Income
                        </h1>
                  </header>

                  <div className="flex flex-col md:flex-row md:space-x-10">
                        {/* Left Panel */}
                        <section className="w-full md:w-1/3 p-8">
                              <h2 className="mb-10 font-sans text-xl">
                                    Add in your expected referrals to see how much you could earn as
                                    a <span className="font-bold">Sunvoy Affiliate</span> in just 1
                                    year.
                              </h2>
                              <CustomSlider
                                    label="Reffered customers per month"
                                    min={1}
                                    max={10}
                                    currentValue={referrals}
                                    onChange={setReferrals}
                              />

                              <CustomSlider
                                    label="Avg. new projects per month"
                                    currentValue={newProjects}
                                    onChange={setNewProjects}
                                    tooltipLabel="This is the number of new projects each of your referred customer installs on average per month"
                                    min={5}
                                    max={50}
                              />
                              <CustomSlider
                                    label="Avg. existing projects"
                                    tooltipLabel="This is the number of existing projects each of your referred customer already has on average"
                                    min={0}
                                    max={10000}
                                    currentValue={existingProject}
                                    onChange={setExistingProjects}
                              />

                              <div className="mt-8 text-center">
                                    <h2 className="font-sans text-xl">
                                          Your <span className="font-bold">monthly income </span>
                                          after 1 year:
                                    </h2>
                                    {loading ? (
                                          <Skeleton height="40px" className="text-6xl mt-5" />
                                    ) : (
                                          <p className="text-6xl mt-5 font-sans font-bold">
                                                ${totalRevenue.toLocaleString()}
                                          </p>
                                    )}
                              </div>
                        </section>

                        {/* Right Panel: Chart */}
                        <section className="w-full md:w-2/3">
                              {loading ? (
                                    <div className="h-96 w-full flex justify-center items-center">
                                          <FontAwesomeIcon
                                                icon={faCircleNotch}
                                                className="animate-spin text-5xl text-gray-900"
                                          />
                                    </div>
                              ) : (
                                    <CustomGraph chartData={chartData} />
                              )}
                        </section>
                  </div>
                  <div className="flex justify-center text-center">
                        <p>
                              Calculations are based on the number of customers you refer each month
                              and thier avg. project volume.
                              <br />
                              Factor in our churm and this bring you to your estimated total passive
                              future income.{" "}
                        </p>
                  </div>
            </div>
      );
}
