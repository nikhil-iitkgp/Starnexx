import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import LongformVideoCard, { type LongformVideoProps } from './LongformVideoCard';
import ShortformVideoCard, { type ShortformVideoProps } from './ShortformVideoCard';
import ThumbnailCard, { type ThumbnailProps } from './ThumbnailCard';

interface PortfolioGridProps {
  title?: string;
  description?: string;
  longformVideos?: LongformVideoProps[];
  shortformVideos?: ShortformVideoProps[];
  thumbnails?: ThumbnailProps[];
  showTabs?: boolean;
  initialTab?: 'longform' | 'shortform' | 'thumbnail';
  className?: string;
  activeTab?: 'longform' | 'shortform' | 'thumbnail';
  setActiveTab?: (tab: 'longform' | 'shortform' | 'thumbnail') => void;
}

export default function PortfolioGrid({
  title = 'My Portfolio',
  description,
  longformVideos = [],
  shortformVideos = [],
  thumbnails = [],
  showTabs = true,
  initialTab = 'longform',
  className = '',
  activeTab: controlledActiveTab,
  setActiveTab: controlledSetActiveTab,
}: PortfolioGridProps) {
  const [uncontrolledActiveTab, setUncontrolledActiveTab] = useState(initialTab);
  const activeTab = controlledActiveTab ?? uncontrolledActiveTab;
  const setActiveTab = controlledSetActiveTab ?? setUncontrolledActiveTab;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          {description && (
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
          )}
        </div>
      )}

      {showTabs && (
        <Tabs
          defaultValue={initialTab}
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as any)}
          className="mb-8"
        >
          <TabsList className="mx-auto bg-amber-50 border border-amber-100 p-1 flex flex-col gap-2 sm:flex-row sm:gap-0 w-full sm:w-auto">
            <TabsTrigger 
              value="longform"
              className={`sm:flex-1 w-full sm:w-auto ${activeTab === 'longform' ? 'bg-amber-500 text-white' : 'text-amber-700 hover:bg-amber-100'}`}
            >
              Longform
            </TabsTrigger>
            <TabsTrigger 
              value="shortform"
              className={`sm:flex-1 w-full sm:w-auto ${activeTab === 'shortform' ? 'bg-amber-500 text-white' : 'text-amber-700 hover:bg-amber-100'}`}
            >
              Shortform
            </TabsTrigger>
            <TabsTrigger 
              value="thumbnail"
              className={`sm:flex-1 w-full sm:w-auto ${activeTab === 'thumbnail' ? 'bg-amber-500 text-white' : 'text-amber-700 hover:bg-amber-100'}`}
            >
              Thumbnails
            </TabsTrigger>
          </TabsList>

          <TabsContent value="longform" className="mt-6">
            {renderLongformGrid(longformVideos, container)}
          </TabsContent>
          
          <TabsContent value="shortform" className="mt-6">
            {renderShortformGrid(shortformVideos, container)}
          </TabsContent>
          
          <TabsContent value="thumbnail" className="mt-6">
            {renderThumbnailGrid(thumbnails, container)}
          </TabsContent>
        </Tabs>
      )}

      {!showTabs && (
        <div className="space-y-12">
          {longformVideos.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Longform Videos</h3>
              {renderLongformGrid(longformVideos, container)}
            </div>
          )}
          
          {shortformVideos.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Shortform Videos</h3>
              {renderShortformGrid(shortformVideos, container)}
            </div>
          )}
          
          {thumbnails.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Thumbnail Designs</h3>
              {renderThumbnailGrid(thumbnails, container)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function renderLongformGrid(videos: LongformVideoProps[], container: any) {
  if (videos.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No longform videos available</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {videos.map((video, index) => (
        <LongformVideoCard key={index} {...video} />
      ))}
    </motion.div>
  );
}

function renderShortformGrid(videos: ShortformVideoProps[], container: any) {
  if (videos.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No shortform videos available</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {videos.map((video, index) => (
        <ShortformVideoCard key={index} {...video} />
      ))}
    </motion.div>
  );
}

function renderThumbnailGrid(thumbnails: ThumbnailProps[], container: any) {
  if (thumbnails.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No thumbnails available</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
      {thumbnails.map((thumbnail, index) => (
        <ThumbnailCard key={index} {...thumbnail} />
      ))}
    </motion.div>
  );
} 