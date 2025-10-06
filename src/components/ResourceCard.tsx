import { Box, Button, Heading, Text, VStack, Badge } from '@chakra-ui/react';

interface Resource {
  id: string;
  name: string;
  description: string;
  category: string;
  contactInfo: string;
  address: string;
}

interface ResourceCardProps {
  resource: Resource;
  onConnect: (resource: Resource) => void;
}

export default function ResourceCard({ resource, onConnect }: ResourceCardProps) {
  return (
    <Box
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      shadow="sm"
      _hover={{ shadow: 'md' }}
      transition="all 0.2s"
    >
      <VStack align="stretch" spacing={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading size="md">{resource.name}</Heading>
          <Badge colorScheme="blue">{resource.category}</Badge>
        </Box>
        
        <Text color="gray.600">{resource.description}</Text>
        
        <Box>
          <Text fontWeight="bold">Contact Information:</Text>
          <Text>{resource.contactInfo}</Text>
        </Box>
        
        <Box>
          <Text fontWeight="bold">Address:</Text>
          <Text>{resource.address}</Text>
        </Box>
        
        <Button colorScheme="blue" onClick={() => onConnect(resource)}>
          Connect with Resource
        </Button>
      </VStack>
    </Box>
  );
}