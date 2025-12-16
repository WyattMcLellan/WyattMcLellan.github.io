import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import { Palette, Sparkles, Zap } from "lucide-react";

export function About() {
  const skills = [
    {
      title: "Brand Identity",
      description:
        "Creating cohesive visual identities that tell compelling brand stories and connect with target audiences.",
      color: "from-purple-500 to-pink-500",
      icon: Sparkles,
    },
    {
      title: "Typography",
      description:
        "Crafting expressive type treatments and exploring the art of letterforms in both digital and print media.",
      color: "from-cyan-500 to-blue-500",
      icon: Palette,
    },
    {
      title: "Print Design",
      description:
        "Designing posters, publications, and packaging with attention to detail and production quality.",
      color: "from-orange-500 to-red-500",
      icon: Zap,
    },
    {
      title: "Digital Design",
      description:
        "Developing user-centered interfaces and digital experiences that are both beautiful and functional.",
      color: "from-green-500 to-emerald-500",
      icon: Sparkles,
    },
    {
      title: "Illustration",
      description:
        "Creating custom illustrations and visual assets that enhance storytelling and brand communication.",
      color: "from-pink-500 to-rose-500",
      icon: Palette,
    },
    {
      title: "Motion Graphics",
      description:
        "Bringing designs to life through animation and exploring time-based media as a design tool.",
      color: "from-violet-500 to-purple-500",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600"
              >
                Hello, I'm
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent"
              >
                Wyatt McLellan
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-600"
              >
                Graphic Design Student
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-700 leading-relaxed"
            >
              I'm a second-year graphic design student
              passionate about creating meaningful visual
              experiences. My work explores the intersection of
              typography, color, and storytelling to craft
              designs that resonate with audiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-700 leading-relaxed"
            >
              Currently based in London, ON, I'm constantly
              seeking new ways to push creative boundaries and
              develop innovative solutions to design challenges.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-first md:order-last"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGNyZWF0aXZlJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzY1ODUxNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wyatt McLellan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <h3 className="mb-3">{skill.title}</h3>
                  <p className="text-gray-600">
                    {skill.description}
                  </p>
                  {/* Gradient strip at bottom */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color}`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education & Tools */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2>Education</h2>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="border-l-4 pl-4 py-2"
                  style={{
                    borderImage:
                      "linear-gradient(to bottom, rgb(244, 63, 94), rgb(239, 68, 68)) 1",
                  }}
                >
                  <h3>OCAD in Graphic Design</h3>
                  <p className="text-gray-600">
                    Fanshawe College
                  </p>
                  <p className="text-gray-500">
                    Expected Graduation: 2027
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2>Tools</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Adobe Illustrator",
                  "Adobe Photoshop",
                  "Adobe InDesign",
                  "Figma",
                ].map((tool, index) => {
                  const colors = [
                    "hover:bg-orange-100 hover:text-orange-700 hover:border-orange-300",
                    "hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300",
                    "hover:bg-pink-100 hover:text-pink-700 hover:border-pink-300",
                    "hover:bg-purple-100 hover:text-purple-700 hover:border-purple-300",
                  ];
                  return (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 bg-gray-100 text-gray-800 rounded-full border-2 border-transparent transition-all duration-300 cursor-default ${colors[index % colors.length]}`}
                    >
                      {tool}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}