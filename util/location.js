const GOOGLE_API_KEY = "AIzaSyBTcjNxu2FGwh7O6HEiiggn1xPZxpgmRbE";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  console.log('Requesting geocoding for coordinates:', lat, lng);

  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }

  const data = await response.json();

  console.log('Geocoding API response:', data);

  if (!data.results || data.results.length === 0) {
    console.log('No results found for the given coordinates.');
    return null; // or you can throw an error here if you prefer
  }

  const address = data.results[0].formatted_address;
  console.log('Address found:', address);
  return address;
}

