"use client";

import { useEffect, useRef , useActionState } from "react";
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

// const initialState: ContactFormState = {
//   message: null,
//   errors: null,
//   success: false,
// };

const initialState = {
  message: '',
};

// async function submitContactForm(prevState: any, formData: FormData) {
//   // Your form submission logic here
// }
export default function ContactForm() {
  const [state] = useActionState(submitContactForm, initialState);
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
                  {/* <a href="mailto:info@cultiveightint.com">
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                  </a> */}
                   <Link href="mailto:info@cultiveightint.com">
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
// "use client";

// import { useEffect, useRef, useState, useActionState } from "react";
// import { useFormStatus } from "react-dom";  
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { submitContactForm } from "@/app/actions/contact";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { CheckCircle, XCircle } from "lucide-react";

// const initialState = {
//   message: '',
//   success: false,
// };

// export default function ContactForm() {
//   const [state, formAction] = useActionState(submitContactForm, initialState);
//   const [showPopup, setShowPopup] = useState(false);
//   const formRef = useRef<HTMLFormElement>(null);
//   const { pending } = useFormStatus();

//   useEffect(() => {
//     if (state.success) {
//       setShowPopup(true);
//       if (formRef.current) {
//         formRef.current.reset();
//       }
//       const timer = setTimeout(() => setShowPopup(false), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [state.success]);

//   return (
//     <div className="relative">
//       <Card>
//         <CardHeader>
//           <CardTitle>Send us a Message</CardTitle>
//           <p className="text-gray-600">
//             Have a question about our products or need assistance? Fill out the form below and we'll get back to you soon.
//           </p>
//         </CardHeader>
//         <CardContent>
//           <form ref={formRef} action={formAction} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <Label className="block text-sm font-medium mb-2">
//                   First Name
//                 </Label>
//                 <Input 
//                   id="firstName" 
//                   name="firstName" 
//                   autoComplete="given-name"
//                   placeholder="Your first name" 
//                   required 
//                 />
//               </div>
//               <div>
//                 <Label className="block text-sm font-medium mb-2">
//                   Last Name
//                 </Label>
//                 <Input 
//                   id="lastName" 
//                   name="lastName" 
//                   autoComplete="family-name"
//                   placeholder="Your last name" 
//                   required 
//                 />
//               </div>
//             </div>

//             <div>
//               <Label className="block text-sm font-medium mb-2">
//                 Email Address
//               </Label>
//               <Input 
//                 id="email" 
//                 name="email" 
//                 type="email" 
//                 autoComplete="email"
//                 placeholder="your.email@example.com" 
//                 required 
//               />
//             </div>

//             <div>
//               <Label className="block text-sm font-medium mb-2">
//                 Phone Number
//               </Label>
//               <Input 
//                 id="phone" 
//                 name="phone" 
//                 type="tel" 
//                 autoComplete="tel"
//                 placeholder="+263 XX XXX XXXX" 
//                 required 
//               />
//             </div>

//             <div>
//               <Label className="block text-sm font-medium mb-2">
//                 Address
//               </Label>
//               <Input 
//                 id="address" 
//                 name="address" 
//                 autoComplete="street-address"
//                 placeholder="Your full address" 
//                 required 
//               />
//             </div>

//             <div>
//               <Label className="block text-sm font-medium mb-2">
//                 Message
//               </Label>
//               <Textarea 
//                 id="message" 
//                 name="message" 
//                 placeholder="Tell us how we can help you..." 
//                 rows={5} 
//                 required 
//               />
//             </div>

//             <Button type="submit" className="w-full" disabled={pending}>
//               {pending ? "Sending..." : "Send Message"}
//             </Button>

//             {!state.success && state.message && (
//               <Alert variant="destructive">
//                 <XCircle className="h-4 w-4" />
//                 <AlertDescription>{state.message}</AlertDescription>
//               </Alert>
//             )}
//           </form>
//         </CardContent>
//       </Card>

//       {/* Success Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full animate-in fade-in zoom-in-95">
//             <div className="flex flex-col items-center text-center gap-4">
//               <CheckCircle className="h-12 w-12 text-green-500" />
//               <h3 className="text-xl font-bold">Message Sent!</h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Thank you for contacting us. We'll get back to you soon.
//               </p>
//               <Button 
//                 onClick={() => setShowPopup(false)}
//                 className="mt-4"
//               >
//                 Close
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }