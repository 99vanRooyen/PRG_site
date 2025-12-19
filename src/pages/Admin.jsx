import React from "react";
import homeBg from "../assets/Home-Bg.jpg";
import Navbar from "../components/Navbar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

// Glassmorphic Card
function Card({ children, className }) {
  return (
 <div className={`bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-xl p-6 transition-transform transform hover:-translate-y-1 hover:shadow-2xl ${className}`}>
    {children}
  </div>
  );
}

function CardContent({ children }) {
  return <div>{children}</div>;
}

function Button({ children, className, onClick }) {
  return (
 <button
   onClick={onClick}
      className={`bg-[#62782B] hover:bg-[#556b24] text-white px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}

export default function Admin() {
  const postData = [
    { name: "Jan", posts: 40 },
    { name: "Feb", posts: 30 },
    { name: "Mar", posts: 50 },
    { name: "Apr", posts: 20 },
  ];

  const trafficData = [
    { month: "Jan", users: 26000, comments: 1200, sessions: 4400 },
    { month: "Feb", users: 27000, comments: 1400, sessions: 4600 },
    { month: "Mar", users: 28000, comments: 1600, sessions: 4800 },
    { month: "Apr", users: 29000, comments: 1800, sessions: 5000 },
  ];

  const bottomStats = [
    { label: "Blog Visits", value: "29,700", percent: 40 },
    { label: "Unique Readers", value: "24,090", percent: 30 },
    { label: "Pageviews", value: "78,760", percent: 50 },
    { label: "New Subscribers", value: "22,123", percent: 60 },
    { label: "Bounce Rate", value: "40.15%", percent: 40 },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${homeBg})` }}>

      {/* Navbar component */}
        <Navbar />

      {/* Navigation */}
      <header className="bg-[#7e9058] bg-opacity-90 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold mb-2 md:mb-0">Print Rebel Admin</h2>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Designs</a>
          <a href="#" className="hover:underline">Inventory</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">Admin</a>
        </nav>
      </header>

      <main className="p-6">
        {/* Header */}
        <section className="mb-10">
          <h1 className="text-5xl font-bold text-black">Admin | Blog Dashboard</h1>
          <p className="text-lg text-black mt-2">Print Rebel Graphix</p>
        </section>

        {/* Top Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { title: "Posts Published", value: "1,240", change: "+3.2%" },
            { title: "Comments", value: "6,200", change: "+1.8%" },
            { title: "Drafts", value: "89", change: "-0.5%" },
            { title: "Sessions", value: "4.4K", change: "+0.9%" },
          ].map((stat, i) => (
            <Card key={i}>
              <CardContent>
                <h2 className="text-lg font-semibold">{stat.title}</h2>
                <p style={{ color: "#62782B" }} className="text-xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-700">Change: {stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Line Chart */}
        <section className="mb-10">
          <Card className="bg-[#dde0d6] border-l-4 border-[#62782B]">
            <CardContent>
              <h2 className="text-xl font-semibold mb-4">Reader Engagement Trends</h2>
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trafficData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#62782B" />
                    <Line type="monotone" dataKey="comments" stroke="#4A5F1F" />
                    <Line type="monotone" dataKey="sessions" stroke="#7e9058" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bar Chart */}
        <section className="mb-10">
          <Card className="border-l-4 border-[#62782B] bg-[#dde0d6]">
            <CardContent>
              <h2 className="text-xl font-semibold mb-4">Monthly Posts</h2>
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={postData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="posts" fill="#62782B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bottom Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {bottomStats.map((stat, i) => (
            <Card key={i}>
              <CardContent>
                <h2 className="text-lg font-semibold">{stat.label}</h2>
                <p style={{ color: "#62782B" }} className="text-xl font-bold">{stat.value}</p>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div className="bg-[#62782B] h-4 rounded-full" style={{ width: `${stat.percent}%` }}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Action Buttons */}
        <section className="mt-10 flex flex-wrap gap-4">
          <Button>Manage Posts</Button>
          <Button>Moderate Comments</Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#7e9058] bg-opacity-90 text-white px-6 py-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-4">Print Rebel Graphix</h3>
            <p>• JASON MC GREGOR • 074 789 6913 • printrebelgraphix@gmail.com • printrebelgraphix4.wordpress.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Designs</a></li>
              <li><a href="#" className="hover:underline">Community</a></li>
              <li><a href="#" className="hover:underline">Reports</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Signed In As</h3>
            <p>Mathew De Kocks</p>
          </div>
        </div>
      </footer>
    </div>
  );
}