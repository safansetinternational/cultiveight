"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ""
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit.co service to send to Zoho email
      const response = await fetch("https://formsubmit.co/ajax/info@cultiveightint.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully! We'll get back to you soon."
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          message: ""
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Sorry, there was an error sending your message. Please try again later or email us directly at info@cultiveightint.com"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitStatus.message) {
      const timer = setTimeout(() => {
        setSubmitStatus({ success: false, message: "" });
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

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
          {submitStatus.message && (
            <Alert className={`mb-4 ${submitStatus.success ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
              {submitStatus.success ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertDescription className={submitStatus.success ? "text-green-800" : "text-red-800"}>
                {submitStatus.message}
              </AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <Input 
                  id="firstName" 
                  placeholder="Your first name" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <Input 
                  id="lastName" 
                  placeholder="Your last name" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@example.com" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+263 XX XXX XXXX" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-2">
                Address
              </label>
              <Input 
                id="address" 
                placeholder="Your address" 
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea 
                id="message" 
                placeholder="Tell us how we can help you..." 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
            
            <p className="text-sm text-gray-500 text-center mt-2">
              Alternatively, you can email us directly at{" "}
              <a href="mailto:info@cultiveightint.com" className="text-blue-600 hover:underline">
                info@cultiveightint.com
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// "use client";

// import { useEffect, useRef , useActionState } from "react";
// import { useFormState, useFormStatus } from "react-dom";  
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// // import { Loader2, CheckCircle, AlertCircle, Link, MessageCircle, MapPin } from "lucide-react";
// import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import Link from 'next/link';

// // const initialState: ContactFormState = {
// //   message: null,
// //   errors: null,
// //   success: false,
// // };

// const initialState = {
//   message: '',
// };

// // async function submitContactForm(prevState: any, formData: FormData) {
// //   // Your form submission logic here
// // }
// export default function ContactForm() {
//   const [state] = useActionState(submitContactForm, initialState);
//   const formRef = useRef<HTMLFormElement>(null);
//   const { pending } = useFormStatus();

//   useEffect(() => {
//     if (state.success && formRef.current) {
//       formRef.current.reset();
//     }
//   }, [state.success]);

//   return (
//      <div>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Send us a Message</CardTitle>
//                 <p className="text-gray-600">
//                   Have a question about our products or need assistance? Fill out the form below and we'll get back to
//                   you soon.
//                 </p>
//               </CardHeader>
//               <CardContent>
//                 <form className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="firstName" className="block text-sm font-medium mb-2">
//                         First Name
//                       </label>
//                       <Input id="firstName" placeholder="Your first name" />
//                     </div>
//                     <div>
//                       <label htmlFor="lastName" className="block text-sm font-medium mb-2">
//                         Last Name
//                       </label>
//                       <Input id="lastName" placeholder="Your last name" />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium mb-2">
//                       Email Address
//                     </label>
//                     <Input id="email" type="email" placeholder="your.email@example.com" />
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium mb-2">
//                       Phone Number
//                     </label>
//                     <Input id="phone" type="tel" placeholder="+263 XX XXX XXXX" />
//                   </div>

//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium mb-2">
//                       Address
//                     </label>
//                     <Input id="subject" placeholder="What's this about?" />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Message
//                     </label>
//                     <Textarea id="message" placeholder="Tell us how we can help you..." rows={5} />
//                   </div>
//                   {/* <a href="mailto:info@cultiveightint.com">
//                   <Button type="submit" className="w-full">
//                     Send Message
//                   </Button>
//                   </a> */}
//                    <Link href="mailto:info@cultiveightint.com">
//                    <Button type="submit" className="w-full">
//                     Send Message
//                   </Button>
//                    </Link>
//                 </form>
//               </CardContent>
//             </Card>

//           </div>
//   );
// }