import { createClient } from 'contentful';

// Create a client instance
const client = createClient({
  space: 'hnk87bf7hmmi',
  accessToken: 'AycuZvLjXBEUPXffWyCB9e4pzFm_RTKk9Wa3bTgpxSg',
  host: 'preview.contentful.com',
});

export const getAllProperties = async () => {
  try {
    // Fetch entries of type 'property' from Contentful
    const response = await client.getEntries({ content_type: "property", select: "fields" });

    // Map response items to required format if needed
    const properties = response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      city: item.fields.city,
      country: item.fields.country,
      address: item.fields.address,
      price: item.fields.price,
      description: item.fields.description,
      image: item.fields.image,
      // Add other fields as needed
    }));

    return properties;
  } catch (error) {
    // Handle errors
    console.error('Error fetching properties from Contentful:', error);
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    // Fetch entry by ID from Contentful
    const response = await client.getEntry(id);

    // Map response item to required format if needed
    const property = {
      id: response.sys.id,
      title: response.fields.title,
      city: response.fields.city,
      country: response.fields.country,
      address: response.fields.address,
      price: response.fields.price,
      description: response.fields.description,
      image: response.fields.image,
      // Add other fields as needed
    };

    return property;
  } catch (error) {
    // Handle errors
    console.error(`Error fetching property with ID ${id} from Contentful:`, error);
    throw error;
  }
};