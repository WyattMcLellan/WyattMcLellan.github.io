import { useParams, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  details: {
    client?: string;
    role: string;
    duration: string;
    tools: string[];
    overview: string;
    challenge: string;
    solution: string;
    additionalImages: string[];
  };
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Urban Echo Campaign',
    category: 'Brand Identity',
    description: 'A complete brand identity system for a sustainable urban living initiative, including logo, color palette, and marketing materials.',
    image: 'https://images.unsplash.com/photo-1765448808249-a3610f38e612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2NTczNDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2024',
    details: {
      client: 'Urban Echo Foundation',
      role: 'Lead Designer',
      duration: '3 months',
      tools: ['Adobe Illustrator', 'Figma', 'InDesign'],
      overview: 'Urban Echo is a non-profit organization dedicated to promoting sustainable living practices in urban environments. The project required a complete visual identity that would resonate with environmentally conscious city dwellers.',
      challenge: 'Creating a brand identity that feels modern and urban while conveying warmth, accessibility, and environmental consciousness. The identity needed to work across digital platforms and traditional print materials.',
      solution: 'Developed a flexible brand system centered around the concept of "echoes" - ripple effects of positive change. The logo combines geometric urban elements with organic flowing lines. A vibrant yet earthy color palette bridges the gap between nature and city life.',
      additionalImages: [
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1080',
        'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1080',
        'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=1080'
      ]
    }
  },
  {
    id: 2,
    title: 'Typography Experiment Series',
    category: 'Typography',
    description: 'An exploration of expressive typography through a series of experimental posters focusing on form and meaning.',
    image: 'https://images.unsplash.com/photo-1662928793080-155661f021f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2NTc3OTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2024',
    details: {
      role: 'Designer & Art Director',
      duration: '2 months',
      tools: ['Adobe Illustrator', 'Photoshop'],
      overview: 'A personal exploration into the expressive potential of typography, where letterforms become the primary visual element. Each poster in the series explores different typographic principles and emotional resonances.',
      challenge: 'How can typography alone convey complex emotions and concepts? The challenge was to push beyond traditional legibility while maintaining meaningful communication.',
      solution: 'Created a series of 12 experimental posters, each focusing on a different typographic treatment - from deconstruction and layering to kinetic type and dimensional letterforms. The work explores the boundary between readability and pure visual form.',
      additionalImages: [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1080',
        'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1080',
        'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1080'
      ]
    }
  },
  {
    id: 3,
    title: 'Metamorphosis Exhibition',
    category: 'Print Design',
    description: 'Exhibition poster series and promotional materials for a contemporary art show exploring themes of transformation.',
    image: 'https://images.unsplash.com/photo-1763671872042-decff1375c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyJTIwbW9ja3VwfGVufDF8fHx8MTc2NTg1MTU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2024',
    details: {
      client: 'Contemporary Arts Center',
      role: 'Graphic Designer',
      duration: '6 weeks',
      tools: ['InDesign', 'Illustrator', 'Photoshop'],
      overview: 'Marketing and promotional materials for a contemporary art exhibition featuring works that explore transformation, change, and evolution in modern society.',
      challenge: 'Capturing the essence of transformation and metamorphosis in a static medium while creating a cohesive visual system that could adapt across multiple formats.',
      solution: 'Developed a dynamic poster series using morphing gradients and fluid shapes that appear to be in constant transition. The typography breaks and reforms across the compositions, mirroring the exhibition theme.',
      additionalImages: [
        'https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=1080',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1080',
        'https://images.unsplash.com/photo-1600493572223-e574a5c9cc96?w=1080'
      ]
    }
  },
  {
    id: 4,
    title: 'Flora Digital Magazine',
    category: 'Digital Design',
    description: 'A responsive digital magazine design celebrating botanical illustration and sustainable gardening practices.',
    image: 'https://images.unsplash.com/photo-1542837336-d14bdf342f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2ViJTIwZGVzaWdufGVufDF8fHx8MTc2NTgyODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2023',
    details: {
      client: 'Flora Publishing',
      role: 'UI/UX Designer',
      duration: '4 months',
      tools: ['Figma', 'Adobe XD', 'Photoshop'],
      overview: 'A fully responsive digital magazine platform dedicated to botanical illustration, urban gardening, and sustainable plant care practices. The design needed to showcase rich visual content while maintaining excellent readability.',
      challenge: 'Creating an immersive reading experience that works seamlessly across devices while highlighting botanical illustrations and photography without overwhelming the content.',
      solution: 'Designed a clean, content-first interface with generous white space and a flexible grid system. Implemented smooth page transitions and an intuitive navigation system that adapts to different screen sizes.',
      additionalImages: [
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1080',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1080',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080'
      ]
    }
  },
  {
    id: 5,
    title: 'Dream Sequences',
    category: 'Illustration',
    description: 'A series of surreal illustrations exploring the visual language of dreams and subconscious imagery.',
    image: 'https://images.unsplash.com/photo-1744055858618-3ba98cfe08b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGlsbHVzdHJhdGlvbiUyMGFydHxlbnwxfHx8fDE3NjU4NTE1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2023',
    details: {
      role: 'Illustrator',
      duration: '5 months',
      tools: ['Photoshop', 'Illustrator'],
      overview: 'A personal illustration project exploring the intersection of dreams, memory, and visual storytelling. Each piece represents different aspects of the dream state and subconscious experience.',
      challenge: 'Translating the abstract, non-linear nature of dreams into cohesive visual narratives that viewers can connect with emotionally.',
      solution: 'Created a series of 15 large-format digital illustrations using a combination of digital painting and vector art. Each piece combines realistic elements with surreal distortions, vibrant color palettes, and symbolic imagery.',
      additionalImages: [
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1080',
        'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1080',
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1080'
      ]
    }
  },
  {
    id: 6,
    title: 'Kinetic Brand Launch',
    category: 'Motion Graphics',
    description: 'Animated brand reveal and social media content for a tech startup focused on sustainable energy solutions.',
    image: 'https://images.unsplash.com/photo-1765448808249-a3610f38e612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2NTczNDE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2023',
    details: {
      client: 'Kinetic Energy Co.',
      role: 'Motion Designer',
      duration: '8 weeks',
      tools: ['Premiere Pro'],
      overview: 'Complete motion graphics package for a sustainable energy startup launching their brand. Deliverables included logo animations, social media content, and promotional videos.',
      challenge: 'Conveying the concepts of energy, movement, and sustainability through motion while maintaining brand consistency across various formats and platforms.',
      solution: 'Created a dynamic motion language based on flowing energy particles and kinetic transitions. Developed a comprehensive library of animated assets that could be mixed and matched for different applications.',
      additionalImages: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1080'
      ]
    }
  }
];

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/work')}
          className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Work
        </motion.button>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-2xl"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm">
              {project.year}
            </span>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Project Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div>
            <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.details.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Story */}
        <div className="space-y-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.details.overview}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="mb-4">Challenge</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.details.challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="mb-4">Solution</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.details.solution}
            </p>
          </motion.div>
        </div>

        {/* Additional Images Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-8"
        >
          <h2>Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.details.additionalImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => navigate('/work')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-xl transition-shadow"
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
}