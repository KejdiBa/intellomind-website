import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Send, Loader2, Mail, Phone, MapPin, CheckCircle, XCircle } from "lucide-react";

const n8nContactSchema = z.object({
  vorname: z.string().min(2, "Vorname muss mindestens 2 Zeichen haben"),
  nachname: z.string().min(2, "Nachname muss mindestens 2 Zeichen haben"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  firma: z.string().min(2, "Firmenname muss mindestens 2 Zeichen haben"),
  telefonnummer: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein"),
  produkt: z.string().min(1, "Bitte wählen Sie ein Produkt aus"),
  nachricht: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
});

type N8nContactForm = z.infer<typeof n8nContactSchema>;

const productOptions = [
  { value: "ki-telefonassistent", label: "KI-Telefonassistent" },
  { value: "ki-chatbot", label: "KI-Chatbot" },
  { value: "ki-mailbot", label: "KI-Mailbot" },
  { value: "beratung", label: "Allgemeine Beratung" },
];

const contactInfo = [
  {
    icon: Mail,
    title: "E-Mail",
    description: "Schreiben Sie uns eine E-Mail und wir antworten innerhalb von 24 Stunden.",
    value: "info@intellomind.ai",
    href: "mailto:info@intellomind.ai",
  },
  {
    icon: Phone,
    title: "Telefon",
    description: "Rufen Sie uns an für eine persönliche Beratung.",
    value: "+49 176 70599 319",
    href: "tel:+4917670599319",
  },
  {
    icon: MapPin,
    title: "Adresse",
    description: "IntelloMind UG (haftungsbeschränkt), Deutschland",
    value: "Hüingser Ring 1, 58710 Menden",
    href: "https://maps.google.com/?q=Hüingser+Ring+1,+58710+Menden",
    external: true,
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"success" | "error">("success");

  const form = useForm<N8nContactForm>({
    resolver: zodResolver(n8nContactSchema),
    defaultValues: {
      vorname: "",
      nachname: "",
      email: "",
      firma: "",
      telefonnummer: "",
      produkt: "",
      nachricht: "",
    },
  });

  const onSubmit = async (data: N8nContactForm) => {
    setIsSubmitting(true);
    
    try {
      const webhookUrl = import.meta.env.VITE_N8N_CONTACT_WEBHOOK_URL;
      
      if (!webhookUrl) {
        throw new Error("Webhook URL nicht konfiguriert");
      }

      const jsonData = {
        Vorname: data.vorname,
        Nachname: data.nachname,
        "E-Mail": data.email,
        Firma: data.firma,
        Telefonnummer: data.telefonnummer,
        Produkt: data.produkt,
        Nachricht: data.nachricht,
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden");
      }

      setDialogType("success");
      setDialogOpen(true);
      form.reset();
    } catch (error) {
      setDialogType("error");
      setDialogOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-24 md:py-32 bg-background/50 backdrop-blur-[2px] relative overflow-hidden"
      data-testid="section-contact"
    >
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center sm:text-center">
            <div className="flex justify-center mb-4">
              {dialogType === "success" ? (
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                  <XCircle className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
            <DialogTitle className="text-xl">
              {dialogType === "success" 
                ? "Nachricht erfolgreich gesendet!" 
                : "Fehler beim Senden"}
            </DialogTitle>
            <DialogDescription className="text-center">
              {dialogType === "success"
                ? "Wir melden uns innerhalb von 24 Stunden bei Ihnen."
                : "Bitte versuchen Sie es später erneut."}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button 
              onClick={() => setDialogOpen(false)}
              className={dialogType === "success" ? "btn-primary-gradient px-8" : "px-8"}
              variant={dialogType === "error" ? "destructive" : "default"}
              data-testid="button-dialog-close"
            >
              OK
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Lassen Sie sich heute noch begeistern!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine unverbindliche Beratung und tauchen Sie ein in die Zukunft.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card className="p-8 glass-card glow-border h-full" data-testid="card-contact-form">
              <h3 className="text-xl font-bold text-foreground mb-6">Kontaktformular</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="vorname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground text-sm">
                            Vorname <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ihr Vorname"
                              className="rounded-lg bg-white dark:bg-slate-900 border-border focus:border-primary"
                              {...field}
                              data-testid="input-vorname"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nachname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground text-sm">
                            Nachname <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ihr Nachname"
                              className="rounded-lg bg-white dark:bg-slate-900 border-border focus:border-primary"
                              {...field}
                              data-testid="input-nachname"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">
                          E-Mail <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="ihre@email.de"
                            className="rounded-lg bg-white dark:bg-slate-900 border-border focus:border-primary"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firma"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground text-sm">
                            Firma <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ihre Firma"
                              className="rounded-lg bg-white dark:bg-slate-900 border-border focus:border-primary"
                              {...field}
                              data-testid="input-firma"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="telefonnummer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground text-sm">
                            Telefonnummer <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+49 123 456789"
                              className="rounded-lg bg-white dark:bg-slate-900 border-border focus:border-primary"
                              {...field}
                              data-testid="input-telefonnummer"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="produkt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">
                          Produkt <span className="text-red-500">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || ""}>
                          <FormControl>
                            <SelectTrigger 
                              className="rounded-lg bg-white dark:bg-slate-900 border-border focus:border-primary"
                              data-testid="select-produkt"
                            >
                              <SelectValue placeholder="Wählen Sie ein Produkt..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {productOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="nachricht"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">
                          Nachricht <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ihre Nachricht an uns..."
                            className="min-h-[100px] resize-none rounded-lg bg-white dark:bg-slate-900 border-border focus:border-primary"
                            {...field}
                            data-testid="input-nachricht"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-lg py-6 font-semibold btn-primary-gradient"
                    disabled={isSubmitting}
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Nachricht senden
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          <div className="flex flex-col gap-4 max-w-sm">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                target={info.external ? "_blank" : undefined}
                rel={info.external ? "noopener noreferrer" : undefined}
                className="group block p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-border transition-all duration-200"
                data-testid={`link-contact-${info.title.toLowerCase()}`}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                  <info.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-foreground text-base mb-1">{info.title}</h4>
                <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                  {info.description}
                </p>
                <p className="font-semibold text-foreground group-hover:underline transition-all">
                  {info.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
