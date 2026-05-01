import BookCard from "./BookCard";

const FeaturedBooks = async () => {
  const res = await fetch(
    "https://book-verse-library-server.onrender.com/books",
  );
  const books = await res.json();
  const fourBooks = books.slice(0, 4);

  return (
    <div className="container mx-auto px-2 mt-16 sm:mt-18 md:mt-20 xl:mt-26 mb-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-10">
        Featured Books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fourBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
