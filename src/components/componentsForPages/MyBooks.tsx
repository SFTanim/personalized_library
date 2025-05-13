import { useState, useEffect } from "react"
import { Book, BookOpen, BookMarked, Library, Search, ChevronRight, Star } from "lucide-react"

// Utility function to conditionally join classNames
const classNames = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ")
}



// Sample book data
const sampleBooks = [
    {
        id: 1,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        cover: "/placeholder.svg?height=150&width=100",
        status: "read",
        rating: 5,
    },
    {
        id: 2,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "/placeholder.svg?height=150&width=100",
        status: "read",
        rating: 4,
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover: "/placeholder.svg?height=150&width=100",
        status: "reading",
        rating: 4,
    },
    {
        id: 4,
        title: "Dune",
        author: "Frank Herbert",
        cover: "/placeholder.svg?height=150&width=100",
        status: "want-to-read",
        rating: 0,
    },
    {
        id: 5,
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        cover: "/placeholder.svg?height=150&width=100",
        status: "want-to-read",
        rating: 0,
    },
]


const MyBooks = () => {
    const [books, setBooks] = useState(sampleBooks)
    const [searchQuery, setSearchQuery] = useState("")
    const [activeTab, setActiveTab] = useState("all")
    const [isLoading, setIsLoading] = useState(true)

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    // Filter books based on search query and active tab
    const filteredBooks = books.filter((book) => {
        const matchesSearch =
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())

        if (activeTab === "all") return matchesSearch
        return matchesSearch && book.status === activeTab.replace("-", "-to-")
    })

    // Calculate stats
    const totalBooks = books.length
    const readBooks = books.filter((book) => book.status === "read").length
    const readingBooks = books.filter((book) => book.status === "reading").length
    const wantToReadBooks = books.filter((book) => book.status === "want-to-read").length
    const progressPercentage = totalBooks > 0 ? Math.round((readBooks / totalBooks) * 100) : 0

    return (
        <div className="">
            {isLoading ? (
                <div className="flex items-center justify-center h-[80vh] opacity-animation">
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative h-12 w-12">
                            <div className="absolute inset-0 rounded-full border-4 border-amber-200 border-t-amber-600 animate-spin" />
                        </div>
                        <p className="text-amber-800 dark:text-amber-300">Loading your bookshelf...</p>
                    </div>
                </div>
            ) : (
                <div className="fade-in">
                    {/* Carts */}
                    <section className="mb-10">
                        <div className="flex items-center gap-3 mb-6 slide-up">
                            <BookOpen className="h-8 w-8 text-amber-600" />
                            <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-300">My Reading Shelf</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                {
                                    title: "Total Books",
                                    icon: <Library />,
                                    count: totalBooks,
                                    color: "bg-amber-100 dark:bg-amber-900",
                                },
                                { title: "Read", icon: <Book />, count: readBooks, color: "bg-emerald-100 dark:bg-emerald-900" },
                                {
                                    title: "Currently Reading",
                                    icon: <BookOpen />,
                                    count: readingBooks,
                                    color: "bg-blue-100 dark:bg-blue-900",
                                },
                                {
                                    title: "Want to Read",
                                    icon: <BookMarked />,
                                    count: wantToReadBooks,
                                    color: "bg-orange-100 dark:bg-orange-900",
                                },
                            ].map((stat, index) => (
                                <div key={stat.title} className={`slide-up-delay-${index}`}>
                                    <div
                                        className={classNames(
                                            "overflow-hidden border-none rounded-lg shadow-md hover:shadow-lg transition-shadow p-6",
                                            stat.color,
                                        )}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="text-amber-800 dark:text-amber-300">{stat.icon}</div>
                                            <span className="text-3xl font-bold text-amber-800 dark:text-amber-300 count-animation">
                                                {stat.count}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm text-amber-700 dark:text-amber-400">{stat.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Progress */}
                    <section className="mb-10 slide-up">
                        <div className="bg-white dark:bg-gray-800 rounded-lg border-none shadow-md p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-amber-600">
                                    <BookOpen className="h-5 w-5" />
                                </div>
                                <h3 className="font-medium text-amber-800 dark:text-amber-300">Library Progress</h3>
                            </div>

                            <div className="relative h-4 w-full bg-amber-100 dark:bg-amber-900 rounded-full overflow-hidden mb-2">
                                <div
                                    className="absolute top-0 left-0 h-full bg-amber-600 progress-animation"
                                    style={{ width: `${progressPercentage}%` }}
                                />
                            </div>

                            <div className="flex justify-between text-sm text-amber-700 dark:text-amber-400">
                                <span>
                                    Completed {readBooks} of {totalBooks} books
                                </span>
                                <span>{progressPercentage}%</span>
                            </div>
                        </div>
                    </section>

                    {/* MyBooks */}
                    <section className="slide-up">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-300">My Books</h2>
                            <button className="button-style-01">
                                View All <ChevronRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>

                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400" />
                            <input
                                type="text"
                                placeholder="Search by title or author..."
                                className="w-full pl-10 py-2 pr-4 rounded-md border border-amber-200 dark:border-amber-800 bg-white dark:bg-gray-800 text-amber-800 dark:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="mb-6">
                            <div className="inline-flex rounded-md bg-amber-100 dark:bg-amber-900 p-1">
                                {["all", "read", "reading", "want-to-read"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={classNames(
                                            "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                                            activeTab === tab
                                                ? "bg-white dark:bg-amber-800 text-amber-800 dark:text-amber-300"
                                                : "text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300",
                                        )}
                                    >
                                        {tab === "all"
                                            ? "All Books"
                                            : tab === "read"
                                                ? "Read"
                                                : tab === "reading"
                                                    ? "Reading"
                                                    : "Want to Read"}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {filteredBooks.length > 0 ? (
                                filteredBooks.map((book, index) => (
                                    <div key={book.id} className={`group book-card slide-up-delay-${index % 5}`}>
                                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                                            <img
                                                src={book.cover || "/placeholder.svg"}
                                                alt={book.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                                <h3 className="text-white font-medium text-sm line-clamp-2">{book.title}</h3>
                                                <p className="text-white/80 text-xs">{book.author}</p>

                                                {book.status === "read" && (
                                                    <div className="flex mt-1">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={classNames(
                                                                    "h-3 w-3",
                                                                    i < book.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400",
                                                                )}
                                                            />
                                                        ))}
                                                    </div>
                                                )}

                                                <span
                                                    className={classNames(
                                                        "mt-2 px-2 py-1 text-xs rounded-full text-white self-start",
                                                        book.status === "read"
                                                            ? "bg-emerald-500"
                                                            : book.status === "reading"
                                                                ? "bg-blue-500"
                                                                : "bg-orange-500",
                                                    )}
                                                >
                                                    {book.status === "read" ? "Read" : book.status === "reading" ? "Reading" : "Want to Read"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-10 text-amber-700 dark:text-amber-400">
                                    No books found matching your search.
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default MyBooks;