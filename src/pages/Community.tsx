"use client"

import { useState } from "react"
import { Search, Heart, MessageSquare, Share2, Download, TrendingUp, Clock } from "lucide-react"

// Utility function to conditionally join classNames
const classNames = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ")
}

// Sample book data
const sampleBooks = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "/placeholder.svg?height=200&width=150",
        rating: 4,
        description: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
        sharedBy: "Book Lover 2",
        likes: 35,
        comments: 0,
    },
    {
        id: 2,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        cover: "/placeholder.svg?height=200&width=150",
        rating: 5,
        description:
            "The story follows the main character Elizabeth Bennet as she deals with issues of manners, upbringing, and marriage in the society of early 19th-century England.",
        sharedBy: "Book Lover 3",
        likes: 42,
        comments: 7,
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover: "/placeholder.svg?height=200&width=150",
        rating: 5,
        description:
            "The story of racial inequality and the destruction of innocence, compassionate, dramatic, and deeply moving.",
        sharedBy: "Book Lover 1",
        likes: 28,
        comments: 3,
    },
    {
        id: 4,
        title: "1984",
        author: "George Orwell",
        cover: "/placeholder.svg?height=200&width=150",
        rating: 4,
        description:
            "A dystopian novel set in a totalitarian society where critical thought is suppressed under a surveillance state.",
        sharedBy: "Book Lover 5",
        likes: 19,
        comments: 2,
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        cover: "/placeholder.svg?height=200&width=150",
        rating: 5,
        description:
            "The adventure of Bilbo Baggins, a hobbit who embarks on an unexpected journey to reclaim the treasure guarded by a dragon.",
        sharedBy: "Book Lover 4",
        likes: 31,
        comments: 5,
    },
]
const Community = () => {
    const [activeTab, setActiveTab] = useState<"trending" | "recent">("trending")
    const [searchQuery, setSearchQuery] = useState("")
    const [likedBooks, setLikedBooks] = useState<number[]>([])

    // Filter books based on search query
    const filteredBooks = sampleBooks.filter((book) => {
        if (!searchQuery) return true

        const query = searchQuery.toLowerCase()
        return (
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.description.toLowerCase().includes(query)
        )
    })

    // Sort books based on active tab
    const sortedBooks = [...filteredBooks].sort((a, b) => {
        if (activeTab === "trending") {
            return b.likes - a.likes
        } else {
            // For "recent" tab, we would normally sort by date
            // Since we don't have dates in our sample data, we'll sort by ID (newest first)
            return b.id - a.id
        }
    })

    // Toggle like for a book
    const toggleLike = (bookId: number) => {
        if (likedBooks.includes(bookId)) {
            setLikedBooks(likedBooks.filter((id) => id !== bookId))
        } else {
            setLikedBooks([...likedBooks, bookId])
        }
    }
    return (
        <div className="">

            {/* Main Content */}
            <main className="">
                <div className="">
                    {/* Community Header */}
                    <div className="flex items-center gap-2 mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-amber-800"
                        >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <h2 className="text-2xl font-bold text-amber-800">Book Community</h2>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search shared books..."
                            className="w-full pl-10 py-2 pr-4 rounded-md border border-amber-200 bg-white text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Tabs */}
                    <div className="flex mb-6 border rounded-md overflow-hidden">
                        <button
                            onClick={() => setActiveTab("trending")}
                            className={classNames(
                                "flex-1 py-2 px-4 flex items-center justify-center gap-1",
                                activeTab === "trending" ? "bg-amber-100 text-amber-800 font-medium" : "bg-white text-amber-600",
                            )}
                        >
                            <TrendingUp size={16} />
                            <span>Trending</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("recent")}
                            className={classNames(
                                "flex-1 py-2 px-4 flex items-center justify-center gap-1",
                                activeTab === "recent" ? "bg-amber-100 text-amber-800 font-medium" : "bg-white text-amber-600",
                            )}
                        >
                            <Clock size={16} />
                            <span>Recent</span>
                        </button>
                    </div>

                    {/* Book List */}
                    <div className="space-y-6">
                        {sortedBooks.length > 0 ? (
                            sortedBooks.map((book) => (
                                <div key={book.id} className="bg-white rounded-md border border-amber-200 overflow-hidden">
                                    {/* Shared By */}
                                    <div className="px-4 py-2 border-b border-amber-100 flex items-center gap-2">
                                        <div className="h-5 w-5 rounded bg-amber-100 flex items-center justify-center text-amber-800 text-xs">
                                            📚
                                        </div>
                                        <span className="text-sm text-amber-800">{book.sharedBy}</span>
                                        <span className="text-xs text-amber-400">shared this book</span>
                                    </div>

                                    {/* Book Content */}
                                    <div className="p-4 flex gap-4">
                                        {/* Book Cover */}
                                        <div className="flex-shrink-0 w-[120px] h-[180px] bg-amber-100 rounded overflow-hidden">
                                            <img
                                                src={book.cover || "/placeholder.svg"}
                                                alt={book.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Book Details */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-amber-800 mb-1">{book.title}</h3>
                                            <p className="text-amber-600 mb-2">{book.author}</p>

                                            {/* Rating */}
                                            <div className="flex items-center mb-3">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill={i < book.rating ? "currentColor" : "none"}
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="text-amber-400"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                    </svg>
                                                ))}
                                            </div>

                                            {/* Description */}
                                            <p className="text-amber-700 text-sm">{book.description}</p>
                                        </div>
                                    </div>

                                    {/* Interaction Buttons */}
                                    <div className="px-4 py-2 border-t border-amber-100 flex items-center">
                                        <button
                                            className={classNames(
                                                "flex items-center gap-1 text-sm mr-4",
                                                likedBooks.includes(book.id) ? "text-red-500" : "text-amber-600 hover:text-amber-800",
                                            )}
                                            onClick={() => toggleLike(book.id)}
                                        >
                                            <Heart size={16} fill={likedBooks.includes(book.id) ? "currentColor" : "none"} />
                                            <span>{book.likes + (likedBooks.includes(book.id) ? 1 : 0)}</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-sm text-amber-600 hover:text-amber-800 mr-4">
                                            <MessageSquare size={16} />
                                            <span>{book.comments}</span>
                                        </button>
                                        <div className="flex-1"></div>
                                        <button className="text-amber-600 hover:text-amber-800 mr-2">
                                            <Share2 size={16} />
                                        </button>
                                        <button className="text-amber-600 hover:text-amber-800">
                                            <Download size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white rounded-md border border-amber-200 p-8 text-center">
                                <p className="text-amber-700">No books found matching your search.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Community;