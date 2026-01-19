import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
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
import { Send, Loader2, Mail, Phone, MapPin, Clock } from "lucide-react";

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
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/50",
  },
  {
    icon: Phone,
    title: "Telefon",
    description: "Rufen Sie uns an für eine persönliche Beratung.",
    value: "+49 176 70599 319",
    href: "tel:+4917670599319",
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    icon: MapPin,
    title: "Adresse",
    description: "IntelloMind UG (haftungsbeschränkt), Deutschland",
    value: "Hüingser Ring 1, 58710 Menden",
    href: "https://maps.google.com/?q=Hüingser+Ring+1,+58710+Menden",
    external: true,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/50",
  },
];

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      const formData = new FormData();
      formData.append("Vorname", data.vorname);
      formData.append("Nachname", data.nachname);
      formData.append("E-Mail", data.email);
      formData.append("Firma", data.firma);
      formData.append("Telefonnummer", data.telefonnummer);
      formData.append("Produkt", data.produkt);
      formData.append("Nachricht", data.nachricht);

      const response = await fetch(webhookUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden");
      }

      toast({
        title: "Nachricht erfolgreich gesendet!",
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-background/50 backdrop-blur-[2px] relative overflow-hidden"
      data-testid="section-contact"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Lassen Sie sich heute noch begeistern!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine unverbindliche Beratung und tauchen Sie ein in die Zukunft.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                target={info.external ? "_blank" : undefined}
                rel={info.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`group relative p-6 rounded-2xl ${info.bgColor} border border-border/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10`}
                data-testid={`link-contact-${info.title.toLowerCase()}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-foreground mb-1">{info.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                      {info.description}
                    </p>
                    <p className={`font-semibold bg-gradient-to-r ${info.color} bg-clip-text text-transparent group-hover:underline`}>
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-border/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-foreground">Schnelle Antwort garantiert</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen – meistens sogar schneller!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
