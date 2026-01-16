import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, Loader2, Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "E-Mail",
    value: "info@intellomind.ai",
    href: "mailto:info@intellomind.ai",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+49 176 70599 319",
    href: "tel:+4917670599319",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Hüingser Ring 1, 58710 Menden",
    href: "https://maps.google.com/?q=Hüingser+Ring+1,+58710+Menden",
    external: true,
  },
];

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Nachricht erfolgreich gesendet!",
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
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
              <h3 className="text-xl font-bold text-foreground mb-6">Kontaktieren Sie uns</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground text-sm">Vorname</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ihr Vorname"
                              className="rounded-lg bg-white border-border focus:border-primary"
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground text-sm">Nachname</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ihr Nachname"
                              className="rounded-lg bg-white border-border focus:border-primary"
                              {...field}
                              value={field.value || ""}
                              data-testid="input-lastname"
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
                        <FormLabel className="text-foreground text-sm">E-Mail</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="ihre@email.de"
                            className="rounded-lg bg-white border-border focus:border-primary"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-sm">Nachricht</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ihre Nachricht..."
                            className="min-h-[100px] resize-none rounded-lg bg-white border-border focus:border-primary"
                            {...field}
                            data-testid="input-message"
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
                    disabled={mutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {mutation.isPending ? (
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
          >
            <Card className="p-8 glass-card glow-border h-full" data-testid="card-contact-info">
              <h3 className="text-xl font-bold text-foreground mb-8">Kontaktdaten</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    target={info.external ? "_blank" : undefined}
                    rel={info.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                    data-testid={`link-contact-${info.title.toLowerCase()}`}
                  >
                    <div className="w-12 h-12 rounded-full icon-bubble-gradient flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{info.title}</p>
                      <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
