import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { ScrollToTop } from "@/components/scroll-to-top";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

const Home = lazy(() => import("@/pages/home"));
const Impressum = lazy(() => import("@/pages/impressum"));
const Datenschutz = lazy(() => import("@/pages/datenschutz"));
const DatenschutzWebapp = lazy(() => import("@/pages/datenschutz-webapp"));
const Leistungsbeschreibung = lazy(() => import("@/pages/leistungsbeschreibung"));
const AGB = lazy(() => import("@/pages/agb"));
const Preise = lazy(() => import("@/pages/preise"));
const KiTelefonassistent = lazy(() => import("@/pages/ki-telefonassistent"));
const KiChatbot = lazy(() => import("@/pages/ki-chatbot"));
const KiMailbot = lazy(() => import("@/pages/ki-mailbot"));
const KiWorkflowAutomation = lazy(() => import("@/pages/ki-workflow-automation"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/preise" component={Preise} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
        <Route path="/datenschutz-webapp" component={DatenschutzWebapp} />
        <Route path="/agb" component={AGB} />
        <Route path="/leistungsbeschreibung" component={Leistungsbeschreibung} />
        <Route path="/ki-telefonassistent" component={KiTelefonassistent} />
        <Route path="/ki-chatbot" component={KiChatbot} />
        <Route path="/ki-mailbot" component={KiMailbot} />
        <Route path="/ki-workflow-automation" component={KiWorkflowAutomation} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="intello-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
