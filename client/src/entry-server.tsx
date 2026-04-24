import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { Switch, Route } from "wouter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

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
import KiWorkflowAutomation from "@/pages/ki-workflow-automation";

function staticHook(url: string): () => [string, (to: string) => void] {
  return () => [url, () => {}];
}

export function render(url: string): string {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });

  return renderToString(
    <Router hook={staticHook(url)}>
      <ThemeProvider defaultTheme="light" storageKey="intello-theme">
        <QueryClientProvider client={qc}>
          <TooltipProvider>
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
            </Switch>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
}
