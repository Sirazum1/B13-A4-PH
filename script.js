let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: null,
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create clean web experiences for client sites. Deliver responsive layouts and maintain reusable components.",
    status: null,
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$95,000 - $135,000",
    description:
      "Turn messy data into clear stories. Build charts that help teams make decisions quickly and confidently.",
    status: null,
  },
  {
    id: 4,
    companyName: "CloudHarbor Systems",
    position: "Support Engineer (L1)",
    location: "Gazipur, Bangladesh",
    type: "Full-time",
    salary: "৳40,000 - ৳60,000",
    description:
      "Handle tickets, reproduce issues, and communicate fixes clearly with customers and the internal team.",
    status: null,
  },
  {
    id: 5,
    companyName: "PulseFin Tech",
    position: "QA Tester (Manual)",
    location: "Remote",
    type: "Full-time",
    salary: "৳45,000 - ৳65,000",
    description:
      "Write test cases, report issues with steps and evidence, and verify fixes across releases.",
    status: null,
  },
  {
    id: 6,
    companyName: "RouteMinds",
    position: "React Intern",
    location: "Dhaka, Bangladesh",
    type: "Internship",
    salary: "৳15,000 - ৳22,000",
    description:
      "Work on small features, learn code reviews, and improve UI components with good structure.",
    status: null,
  },
  {
    id: 7,
    companyName: "NovaHealth Labs",
    position: "Backend Developer (Node.js)",
    location: "Chattogram, Bangladesh",
    type: "Full-time",
    salary: "৳80,000 - ৳110,000",
    description:
      "Build APIs, improve database performance, and implement secure authentication flows for production systems.",
    status: null,
  },
  {
    id: 8,
    companyName: "Skyline Media House",
    position: "Content Coordinator",
    location: "Dhaka",
    type: "Full-time",
    salary: "৳38,000 - ৳52,000",
    description:
      "Coordinate weekly content, communicate with creators, and keep publishing schedules accurate and on time.",
    status: null,
  },
];

const jobsList = document.getElementById("jobsList");
const emptyState = document.getElementById("emptyState");
const emptyTitle = document.getElementById("emptyTitle");
const emptySubtitle = document.getElementById("emptySubtitle");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

const tabCount = document.getElementById("tabCount");
const tabs = document.querySelectorAll(".tab");

let activeTab = "All";

function getFilteredJobs(tab) {
  if (tab === "All") return jobs;
  return jobs.filter((j) => j.status === tab);
}

function countStatus(status) {
  return jobs.filter((j) => j.status === status).length;
}

function updateDashboard() {
  totalCount.textContent = String(jobs.length);
  interviewCount.textContent = String(countStatus("Interview"));
  rejectedCount.textContent = String(countStatus("Rejected"));
}