import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Urban Echo Campaign',
    category: 'Brand Identity',
    description: 'A complete brand identity system for a sustainable urban living initiative, including logo, color palette, and marketing materials.',
    image: 'https://images.unsplash.com/photo-1765448808249-a3610f38e612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2NTczNDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2024'
  },
  {
    id: 2,
    title: 'Typography Experiment Series',
    category: 'Typography',
    description: 'An exploration of expressive typography through a series of experimental posters focusing on form and meaning.',
    image: 'https://images.unsplash.com/photo-1662928793080-155661f021f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2NTc3OTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2024'
  },
  {
    id: 3,
    title: 'Metamorphosis Exhibition',
    category: 'Print Design',
    description: 'Exhibition poster series and promotional materials for a contemporary art show exploring themes of transformation.',
    image: 'https://images.unsplash.com/photo-1763671872042-decff1375c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyJTIwbW9ja3VwfGVufDF8fHx8MTc2NTg1MTU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2024'
  },
  {
    id: 4,
    title: 'Flora Digital Magazine',
    category: 'Digital Design',
    description: 'A responsive digital magazine design celebrating botanical illustration and sustainable gardening practices.',
    image: 'https://images.unsplash.com/photo-1542837336-d14bdf342f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2ViJTIwZGVzaWdufGVufDF8fHx8MTc2NTgyODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2023'
  },
  {
    id: 5,
    title: 'Dream Sequences',
    category: 'Illustration',
    description: 'A series of surreal illustrations exploring the visual language of dreams and subconscious imagery.',
    image: 'https://images.unsplash.com/photo-1744055858618-3ba98cfe08b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGlsbHVzdHJhdGlvbiUyMGFydHxlbnwxfHx8fDE3NjU4NTE1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2023'
  },
  {
    id: 6,
    title: 'Kinetic Brand Launch',
    category: 'Motion Graphics',
    description: 'Animated brand reveal and social media content for a tech startup focused on sustainable energy solutions.',
    image: 'https://images.unsplash.com/photo-1765448808249-a3610f38e612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2NTczNDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2023'
  }
];

export function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Selected Work
          </h1>
          <p className="text-gray-600 max-w-3xl">
            A collection of projects spanning brand identity, typography, print, and digital design. 
            Each piece represents a unique exploration of visual communication and creative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => navigate(`/work/${project.id}`)}
              className="group cursor-pointer"
            >
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-orange-600/0 group-hover:from-purple-600/80 group-hover:via-pink-600/60 group-hover:to-orange-600/80 transition-all duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: hoveredProject === project.id ? 1 : 0,
                      rotate: hoveredProject === project.id ? 0 : -180
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <ExternalLink className="text-white" size={40} />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="group-hover:text-purple-600 transition-colors">{project.title}</h3>
                  <span className="text-sm px-3 py-1 bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white rounded-full transition-all duration-300">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}