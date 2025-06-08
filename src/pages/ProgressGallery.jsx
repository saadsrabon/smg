import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const ProgressGallery = () => {
  const [activeTab, setActiveTab] = useState('health2023');

  // Health Camp Data 2023
  const healthData2023 = [
    { month: 'Jan', cardHolders: 288, patients: 132, revenue: 4320 },
    { month: 'Feb', cardHolders: 404, patients: 115, revenue: 6060 },
    { month: 'Mar', cardHolders: 480, patients: 96, revenue: 7200 },
    { month: 'Apr', cardHolders: 510, patients: 85, revenue: 7650 },
    { month: 'May', cardHolders: 519, patients: 81, revenue: 7785 },
    { month: 'Jun', cardHolders: 528, patients: 99, revenue: 7920 },
    { month: 'Jul', cardHolders: 530, patients: 78, revenue: 7950 },
    { month: 'Aug', cardHolders: 532, patients: 99, revenue: 7980 },
    { month: 'Sep', cardHolders: 537, patients: 86, revenue: 8055 },
    { month: 'Oct', cardHolders: 542, patients: 98, revenue: 8130 },
    { month: 'Nov', cardHolders: 543, patients: 83, revenue: 8145 },
    { month: 'Dec', cardHolders: 543, patients: 88, revenue: 8145 }
  ];

  // Health Camp Data 2024
  const healthData2024 = [
    { month: 'Jan', cardHolders: 547, patients: 51, revenue: 8205 },
    { month: 'Feb', cardHolders: 548, patients: 99, revenue: 8220 },
    { month: 'Mar', cardHolders: 548, patients: 76, revenue: 8220 },
    { month: 'Apr', cardHolders: 548, patients: 0, revenue: 8220 },
    { month: 'May', cardHolders: 548, patients: 36, revenue: 8220 },
    { month: 'Jun', cardHolders: 550, patients: 81, revenue: 8250 },
    { month: 'Jul', cardHolders: 551, patients: 94, revenue: 8265 },
    { month: 'Aug', cardHolders: 551, patients: 74, revenue: 8265 },
    { month: 'Sep', cardHolders: 551, patients: 97, revenue: 8265 }
  ];

  // Fund Disbursement Data 2024
  const fundData = [
    { month: 'May', item: 'Sewing Machine', amount: 8000, savings: 0 },
    { month: 'Jun', item: 'Auto Van', amount: 300500, savings: 7000 },
    { month: 'Jul', item: 'Savings Only', amount: 0, savings: 9500 },
    { month: 'Aug', item: 'Savings Only', amount: 0, savings: 5500 },
    { month: 'Sep', item: 'Savings Only', amount: 0, savings: 5500 },
    { month: 'Oct', item: 'Savings Only', amount: 0, savings: 6000 },
    { month: 'Nov', item: 'Savings Only', amount: 0, savings: 4000 },
    { month: 'Dec', item: 'Sewing Machine', amount: 309000, savings: 0 }
  ];

  // Education Program Data 2024
  const educationData = [
    { month: 'Jan', salary: 2500, materials: 0, stationary: 0, total: 2500 },
    { month: 'Feb', salary: 2500, materials: 0, stationary: 0, total: 2500 },
    { month: 'Mar', salary: 2500, materials: 0, stationary: 0, total: 2500 },
    { month: 'Apr', salary: 2500, materials: 0, stationary: 0, total: 2500 },
    { month: 'May', salary: 2500, materials: 0, stationary: 55, total: 2555 },
    { month: 'Jun', salary: 2500, materials: 0, stationary: 35, total: 2535 },
    { month: 'Jul', salary: 4500, materials: 0, stationary: 60, total: 4560 },
    { month: 'Aug', salary: 4500, materials: 0, stationary: 0, total: 4500 },
    { month: 'Sep', salary: 4500, materials: 0, stationary: 0, total: 4500 },
    { month: 'Oct', salary: 4500, materials: 0, stationary: 50, total: 4550 },
    { month: 'Nov', salary: 4500, materials: 0, stationary: 0, total: 4500 },
    { month: 'Dec', salary: 4500, materials: 0, stationary: 30, total: 4530 }
  ];

  // Summary data for pie charts
  const healthSummary2023 = [
    { name: 'Total Card Holders', value: 543, color: '#0088FE' },
    { name: 'Total Patients Served', value: 1140, color: '#00C49F' },
    { name: 'Total Revenue (÷100)', value: 811, color: '#FFBB28' }
  ];

  const programSummary = [
    { name: 'Health Services', value: 45, color: '#0088FE' },
    { name: 'Education Program', value: 25, color: '#00C49F' },
    { name: 'Fund Disbursement', value: 20, color: '#FFBB28' },
    { name: 'Savings Program', value: 10, color: '#FF8042' }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 font-medium rounded-lg transition-all duration-200 ${
        isActive 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">SHOMAJGORI Foundation</h1>
          <p className="text-lg text-gray-600">Vogdaburi, BOP Bazar, Chilahati, Domar, Nilphamari</p>
          <p className="text-sm text-gray-500 mt-2">Comprehensive Program Analytics Dashboard</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <TabButton 
            id="health2023" 
            label="Health Camp 2023" 
            isActive={activeTab === 'health2023'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="health2024" 
            label="Health Camp 2024" 
            isActive={activeTab === 'health2024'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="funds" 
            label="Fund Disbursement" 
            isActive={activeTab === 'funds'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="education" 
            label="Education Program" 
            isActive={activeTab === 'education'} 
            onClick={setActiveTab} 
          />
          <TabButton 
            id="overview" 
            label="Overview" 
            isActive={activeTab === 'overview'} 
            onClick={setActiveTab} 
          />
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === 'health2023' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Camp Performance 2023</h2>
                <p className="text-gray-600">Bi-Weekly health camps providing medical services to the community</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4 text-center">Card Holders vs Patients Served</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={healthData2023}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="cardHolders" stroke="#0088FE" strokeWidth={3} name="Card Holders" />
                      <Line type="monotone" dataKey="patients" stroke="#00C49F" strokeWidth={3} name="Patients Served" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4 text-center">Monthly Revenue Trend</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={healthData2023}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="revenue" stroke="#FFBB28" fill="#FFBB28" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-blue-600">543</h4>
                  <p className="text-gray-600">Total Card Holders</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-green-600">1,140</h4>
                  <p className="text-gray-600">Total Patients Served</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-yellow-600">81,100</h4>
                  <p className="text-gray-600">Total Revenue</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'health2024' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Camp Performance 2024</h2>
                <p className="text-gray-600">Continuing medical services with improved outreach</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4 text-center">Monthly Patient Flow</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={healthData2024}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="patients" fill="#00C49F" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4 text-center">Card Holder Growth</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={healthData2024}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="cardHolders" stroke="#0088FE" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-blue-600">551</h4>
                  <p className="text-gray-600">Current Card Holders</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-green-600">608</h4>
                  <p className="text-gray-600">Total Patients (Jan-Sep)</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-yellow-600">1.5%</h4>
                  <p className="text-gray-600">Growth Rate</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'funds' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Fund Disbursement & Savings 2024</h2>
                <p className="text-gray-600">Equipment purchases and community savings program</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4 text-center">Monthly Disbursements</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={fundData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="amount" fill="#FF8042" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4 text-center">Savings Deposits</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={fundData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="savings" stroke="#8884D8" fill="#8884D8" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-orange-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-orange-600">6,17,500</h4>
                  <p className="text-gray-600">Total Disbursed</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-purple-600">37,500</h4>
                  <p className="text-gray-600">Total Savings</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-indigo-600">3</h4>
                  <p className="text-gray-600">Equipment Purchased</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Education Program Expenditure 2024</h2>
                <p className="text-gray-600">Teacher salaries and educational materials</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4 text-center">Monthly Expenditure</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={educationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="salary" fill="#0088FE" name="Salary" />
                      <Bar dataKey="stationary" fill="#FFBB28" name="Stationary" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4 text-center">Cumulative Spending</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={educationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="total" stroke="#00C49F" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-blue-600">42,000</h4>
                  <p className="text-gray-600">Teacher Salaries</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-yellow-600">230</h4>
                  <p className="text-gray-600">Stationary</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <h4 className="text-2xl font-bold text-green-600">42,230</h4>
                  <p className="text-gray-600">Total Expenditure</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Foundation Overview</h2>
                <p className="text-gray-600">Comprehensive view of all programs and initiatives</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4 text-center">Program Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={programSummary}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {programSummary.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4 text-center">Health Services Impact</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={healthSummary2023}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, value}) => `${name}: ${value}`}
                      >
                        {healthSummary2023.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-center text-white">
                  <h4 className="text-2xl font-bold">551</h4>
                  <p className="text-blue-100">Active Members</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-center text-white">
                  <h4 className="text-2xl font-bold">1,748</h4>
                  <p className="text-green-100">Total Patients</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-6 text-center text-white">
                  <h4 className="text-2xl font-bold">6.6L</h4>
                  <p className="text-yellow-100">Total Funding</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-center text-white">
                  <h4 className="text-2xl font-bold">3</h4>
                  <p className="text-purple-100">Programs Active</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Achievements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Health Services</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Served 1,748 patients across 2023-2024</li>
                      <li>• Maintained 551 active card holders</li>
                      <li>• Generated 1.6L in revenue</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Community Development</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Purchased essential equipment worth 6.2L</li>
                      <li>• Facilitated 37.5K in community savings</li>
                      <li>• Invested 42.2K in education</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressGallery;