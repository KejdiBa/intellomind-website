import { Switch, Route } from "wouter";
import { ScrollToTop } from "@/components/scroll-to-top";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Impressum from "@/pages/impressum";
import Datenschutz from "@/pages/datenschutz";
import DatenschutzWebapp from "@/pages/datenschutz-webapp";
import Leistungsbeschreibung from "@/pages/leistungsbeschreibung";
import AGB from "@/pages/agb";
import Preise from "@/pages/preise";
import KiTelefonassistent from "@/pages/ki-telefonassistent";
import KiChatbot from "@/pages/ki-chatbot";
import KiMailbot from "@/pages/ki-mailbot";

function Router() {
  return (
    <>
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
      <Route component={NotFound} />
    </Switch>
    </>
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
