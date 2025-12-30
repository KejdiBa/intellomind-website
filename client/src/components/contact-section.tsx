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
import { Send, Loader2, Sparkles } from "lucide-react";

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
        description: "Wir melden uns innerhalb von 24 Stunden bei dir.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuche es später erneut.",
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
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      data-testid="section-contact"
    >
      <div className="absolute inset-0">
        <div className="bg-gradient-orb bg-gradient-orb-pink w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Jetzt ausprobieren!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fülle das Formular aus und wir melden uns bei dir, um zu besprechen,
            wie IntelloMind dein Business transformieren kann.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <Card className="p-8 md:p-10 glass-card glow-border" data-testid="card-contact-form">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Dein Name"
                            className="rounded-xl bg-background/50 border-border/50 focus:border-primary"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">E-Mail</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="deine@email.de"
                            className="rounded-xl bg-background/50 border-border/50 focus:border-primary"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Unternehmen (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Dein Unternehmen"
                          className="rounded-xl bg-background/50 border-border/50 focus:border-primary"
                          {...field}
                          value={field.value || ""}
                          data-testid="input-company"
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
                      <FormLabel className="text-foreground">Nachricht</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Erzähl uns von deinem Projekt..."
                          className="min-h-[120px] resize-none rounded-xl bg-background/50 border-border/50 focus:border-primary"
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
                  className="w-full rounded-full py-7 text-lg font-semibold hover-glow"
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
                      Jetzt Kontakt aufnehmen
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
