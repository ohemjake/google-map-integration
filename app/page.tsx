import RestaurantSearch from '@/app/components/searchmap';

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Restaurant Finder</h1>
      <RestaurantSearch />
    </div>
  );
}

export default HomePage;
