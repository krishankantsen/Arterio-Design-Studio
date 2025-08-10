'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for your message. We\'ll get back to you soon.',
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-orange-500" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM'
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email',
      details: 'hello@arteriodesign.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-500" />,
      title: 'Address',
      details: '123 Design Street',
      subtitle: 'Creative City, CC 12345'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: 'Office Hours',
      details: 'Monday - Friday',
      subtitle: '9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Toaster />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Ready to transform your space? We'd love to hear about your project and discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">Send us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        {...register('name')}
                        className="mt-1"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        {...register('subject')}
                        className="mt-1"
                        placeholder="What is your project about?"
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        {...register('message')}
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      size="lg"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-playfair font-bold mb-4">Let's Start a Conversation</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We're here to answer any questions you may have about our services. 
                    Whether you're planning a complete renovation or just looking for design advice, 
                    we'd love to help bring your vision to life.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">{info.icon}</div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                              <p className="text-gray-800">{info.details}</p>
                              <p className="text-sm text-gray-500">{info.subtitle}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Map placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-8"
                >
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div 
                      className="h-64 bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center"
                      style={{
                        backgroundImage: 'url(https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="bg-white/90 p-6 rounded-lg text-center">
                        <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                        <h3 className="font-semibold text-gray-900">Visit Our Studio</h3>
                        <p className="text-gray-600">123 Design Street, Creative City</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How long does a typical project take?</h3>
                  <p className="text-gray-600">
                    Project timelines vary based on scope, but residential projects typically take 6-12 weeks 
                    from concept to completion, while commercial projects may take 3-6 months.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Do you work within specific budgets?</h3>
                  <p className="text-gray-600">
                    Absolutely! We work with clients across various budget ranges and will create a 
                    design plan that maximizes value within your specific budget constraints.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Can you work with existing furniture?</h3>
                  <p className="text-gray-600">
                    Yes, we love incorporating pieces that have sentimental value or are in great condition. 
                    We'll work around your existing pieces and recommend additions that complement them.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Do you provide 3D visualizations?</h3>
                  <p className="text-gray-600">
                    Yes, we provide detailed 3D renderings and virtual walkthroughs so you can 
                    visualize your space before any work begins. This helps ensure the final result matches your vision.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;