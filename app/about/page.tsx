'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Passion',
      description: 'We are passionate about creating beautiful, functional spaces that inspire daily living.'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, paying attention to the smallest details.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to bring their vision to life.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Innovation',
      description: 'We embrace new trends and technologies while respecting timeless design principles.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Lead Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 15 years of experience, Sarah founded Arterio to create spaces that truly reflect her clients\' personalities.'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Interior Designer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Michael specializes in commercial spaces and sustainable design practices, bringing innovation to every project.'
    },
    {
      name: 'Emma Williams',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emma ensures every project runs smoothly from concept to completion with her exceptional organizational skills.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '25+', label: 'Awards Won' },
    { number: '10+', label: 'Years in Business' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
                About Arterio
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We are a team of passionate interior designers dedicated to creating spaces that inspire, 
                comfort, and reflect the unique personality of each client.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Founded in 2015, Arterio Design Studio has grown from a small boutique firm to a 
                recognized leader in luxury interior design, serving clients across residential and 
                commercial sectors.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern interior design"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To transform ordinary spaces into extraordinary experiences that enhance the way people 
              live, work, and interact with their environment. We believe that thoughtful design has 
              the power to improve lives and create lasting value.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our commitment to excellence</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals who bring creativity, expertise, and passion to every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Arterio Design Studio was born from a simple belief: that everyone deserves to live and 
                  work in spaces that inspire them. Founded by Sarah Johnson in 2015, our studio began 
                  as a passion project in a small downtown office.
                </p>
                <p>
                  What started as a one-woman operation has grown into a full-service design studio with 
                  a team of talented professionals. We've had the privilege of working on over 500 projects, 
                  from intimate residential renovations to large-scale commercial developments.
                </p>
                <p>
                  Today, we continue to push the boundaries of design while staying true to our core 
                  mission: creating spaces that are not just beautiful, but meaningful and functional 
                  for the people who inhabit them.
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Award-winning design team
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Sustainable design practices
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Client-centered approach
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Design process"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Finished project"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Design materials"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;