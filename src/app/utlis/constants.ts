import {
  Activity,
  ArrowRight,
  Clock,
  LayoutDashboard,
  Lock,
  Play,
  Rocket,
  Workflow,
  Zap,
} from "lucide-react";

export const navLinks = [
  {
    id: 1,
    label: "Features",
    link: "/features",
  },

  {
    id: 2,
    label: "How-it-Works",
    link: "/working",
  },
];

export const featuresAvailable = [
  {
    title: "Custom Triggers",
    description:
      "Set up triggers from any supported app or service to start your automation workflow",
    icon: Zap,
  },
  {
    title: "Multiple Actions",
    description:
      "Chain multiple actions together to create complex automation workflows",
    icon: Workflow,
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Monitor your workflows in real-time and get instant notifications",
    icon: Activity,
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee",
    icon: Lock,
  },
  {
    title: "Quick Setup",
    description:
      "Get started in minutes with our intuitive interface and templates",
    icon: Rocket,
  },
  {
    title: "24/7 Automation",
    description:
      "Your workflows run automatically, 24/7, without any manual intervention",
    icon: Clock,
  },
];

export const workflow = [
  {
    title: "Choose a Trigger",
    description: "Select an event that starts your workflow",
    icon: Zap,
  },
  {
    title: "Add Actions",
    description: "Define what happens when the trigger fires",
    icon: ArrowRight,
  },
  {
    title: "Automate the Process",
    description: "Let ZapFlow handle the rest automatically",
    icon: Play,
  },
];

export const sidebar = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
];
