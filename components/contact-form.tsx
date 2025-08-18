"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";  
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Loader2, CheckCircle, AlertCircle, Link, MessageCircle, MapPin } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from 'next/link';

const initialState: ContactFormState = {
  message: null,
  errors: null,
  success: false,
};


export default function ContactForm() {
  const [state] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
     <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Have a question about our products or need assistance? Fill out the form below and we'll get back to
                  you soon.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+263 XX XXX XXXX" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Address
                    </label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." rows={5} />
                  </div>
                  {/* <a href="mailto:info@cultiveight.co.zw">
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                  </a> */}
                   <Link href="mailto:info@cultiveight.co.zw">
                   <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                   </Link>
                </form>
              </CardContent>
            </Card>

          </div>
  );
}