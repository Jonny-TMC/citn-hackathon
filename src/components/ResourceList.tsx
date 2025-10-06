import { Box, SimpleGrid, Heading, Input, Select, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import ResourceCard from './ResourceCard';

// Sample resource categories
const RESOURCE_CATEGORIES = [
  'Food Banks',
  'Housing Assistance',
  'Healthcare',
  'Job Training',
  'Education',
  'Mental Health',
  'Senior Services',
  'Child Care'
];

// Sample resources (in a real app, this would come from an API)
const SAMPLE_RESOURCES = [
  {
    id: '1',
    name: 'Freestore Foodbank',
    description: 'Provides emergency food assistance to families in need',
    category: 'Food Banks',
    contactInfo: '513-482-4500',
    address: '1141 Central Parkway, Cincinnati, OH 45202'
  },
  // Add more sample resources as needed
];

interface ResourceListProps {
  zipCode?: string;
}

export default function ResourceList({ zipCode }: ResourceListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredResources = SAMPLE_RESOURCES.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleConnect = (resource: any) => {
    // In a real app, this would handle the connection process
    window.open(\`tel:\${resource.contactInfo.replace(/[^0-9]/g, '')}\`);
  };

  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg">Available Resources {zipCode ? \`in \${zipCode}\` : ''}</Heading>
      
      <Box>
        <SimpleGrid columns={2} spacing={4}>
          <Input
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            placeholder="All Categories"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {RESOURCE_CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </SimpleGrid>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {filteredResources.map(resource => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onConnect={handleConnect}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}