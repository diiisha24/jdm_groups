"use client"
import React, { useState, useEffect } from 'react';

// Default network data as fallback
const defaultNetworkData = [
  {
    region: "North America",
    headquarters: "New York, USA",
    branches: "15 locations across the US and Canada",
  },
  {
    region: "Europe",
    headquarters: "London, UK",
    branches: "12 locations across Western Europe",
  },
  {
    region: "Asia-Pacific",
    headquarters: "Singapore",
    branches: "20 locations across Asia and Australia",
  },
];

const Network = () => {
  const [networkData, setNetworkData] = useState(defaultNetworkData); // Initialize with default data

  // Fetch network data from API on mount
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetchNetworkData = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/api/network/`); // Hypothetical endpoint
        const data = await response.json();
        // Assuming the API returns an array of objects with region, headquarters, and branches
        if (data && Array.isArray(data) && data.length > 0) {
          const fetchedNetworkData = data.map(item => ({
            region: item.region || "Unknown Region",
            headquarters: item.headquarters || "Unknown Headquarters",
            branches: item.branches || "No branch information",
          }));
          setNetworkData(fetchedNetworkData);
        }
      } catch (error) {
        console.error("Error fetching network data:", error);
        // Fallback to defaultNetworkData (already set)
      }
    };

    fetchNetworkData();
  }, []); // Runs once on mount

  return (
    <div className="network-section fix section-padding pt-0" id="network">
      <div>
        <div className="bg-amber-500 flex flex-col md:flex-row items-center justify-content-center align-items-start max-h-[700px] h-[700px] rounded-lg overflow-hidden">
          {/* Left Side: World Map Image */}
          <div className="md:w-1/2 w-full h-full">
            <img
              src="assets/img/our_network/JDM Network.png"
              alt="World Map"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Branch Information */}
          <div className="md:w-1/2 w-full p-5 px-10 md:px-20 flex flex-column justify-center h-full text-black gap-1">
            <h2 className="text-4xl font-bold mb-4 wow fadeInUp" data-wow-delay=".3s">
              Our Global Network
            </h2>
            <p className="text-white/80 mb-6 wow fadeInUp" data-wow-delay=".5s">
              JDM operates a vast network of branches worldwide, delivering exceptional services tailored to local needs while maintaining global standards.
            </p>

            {/* Branch List */}
            <div className="space-y-6 wow fadeInUp" data-wow-delay=".7s">
              {networkData.map((branch, index) => (
                <div key={index} className="branch-item">
                  <h3 className="text-xl font-semibold">{branch.region}</h3>
                  <p className="text-white/70">
                    Headquarters: {branch.headquarters}<br />
                    Branches: {branch.branches}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .network-section {
          position: relative;
        }

        .branch-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 1rem;
        }

        .branch-item:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .network-section .container {
            padding: 0;
          }

          .bg-amber-500 {
            height: auto;
            max-height: none;
          }

          .p-8 {
            padding: 2rem;
          }

          .text-4xl {
            font-size: 2rem;
          }

          .text-xl {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Network;