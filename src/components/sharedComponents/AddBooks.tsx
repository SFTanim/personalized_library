import { useForm, SubmitHandler, Controller } from "react-hook-form"
import Select from "react-select"
import { yesOrNo, writersNationality, bookConditions, bookGenres, bookOrigins, readingStatus } from '../../assets/selectOptions.ts'
import { useState } from "react"

type Inputs = {
    originalBookName: string
    originalWriterName: string
    interpreterWriterName: string
    publication: string
    acquired_date: string
    boughfrom: string
    receivedGiftFrom: string
    bookPrice: number
    writerNationality: { label: string; value: string } | null
    bookHave: { label: string; value: string } | null
    bookReaded: { label: string; value: string } | null
    bookGenre: { label: string; value: string } | null
    receivedAsGift: { label: string; value: string } | null
    bookCondition: { label: string; value: string } | null

}

// const customSelectStyles = {
//     control: (provided: any, state: any) => ({
//         ...provided,
//         borderColor: state.isFocused ? "#B45309" : "#F59E0B",
//         boxShadow: state.isFocused ? "0 0 0 1px #B45309" : "none",
//         "&:hover": {
//             borderColor: "#B45309",
//         },
//         borderRadius: "0.375rem",
//         padding: "2px",
//         backgroundColor: "white",
//     }),
//     option: (provided: any, state: any) => ({
//         ...provided,
//         backgroundColor: state.isSelected ? "#F59E0B" : state.isFocused ? "#FEF3C7" : "white",
//         color: state.isSelected ? "white" : "#92400E",
//         "&:active": {
//             backgroundColor: "#F59E0B",
//         },
//     }),
//     placeholder: (provided: any) => ({
//         ...provided,
//         color: "#D97706",
//     }),
//     singleValue: (provided: any) => ({
//         ...provided,
//         color: "#92400E",
//     }),
// }
const AddBooks = () => {
    const [isSuccess, setIsSuccess] = useState(false)

    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setTimeout(() => {
            console.log(data)
            setIsSuccess(true)
            reset()
            setTimeout(() => setIsSuccess(false), 3000)
        }, 1000)
    }

    // const {
    //     control,
    //     register,
    //     handleSubmit,
    // } = useForm<Inputs>()
    // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (

        <div className="bg-amber-50">
   
            {/* Main Content */}
            <main className="">
                <div className="">
                    {/* Success Message */}
                    {isSuccess && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>Book added successfully!</span>
                            </div>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Book Information Section */}
                        <div className="bg-white rounded-lg border border-amber-200 overflow-hidden">
                            <div className="bg-amber-100 px-6 py-3">
                                <h3 className="text-lg font-semibold text-amber-800">Book's Information</h3>
                            </div>

                            <div className="p-6 space-y-4">
                                {/* Book Name */}
                                <div>
                                    <label htmlFor="originalBookName" className="block text-sm font-medium text-amber-800 mb-1">
                                        Book's Name (Original)
                                    </label>
                                    <input
                                        id="originalBookName"
                                        type="text"
                                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                                        {...register("originalBookName", { required: true })}
                                    />
                                </div>

                                {/* Writer's Name */}
                                <div>
                                    <label htmlFor="originalWriterName" className="block text-sm font-medium text-amber-800 mb-1">
                                        Writer's Name
                                    </label>
                                    <input
                                        id="originalWriterName"
                                        type="text"
                                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800 mb-2"
                                        {...register("originalWriterName", { required: true })}
                                    />
                                </div>

                                {/* Interpreter Writer's Name */}
                                <div>
                                    <label htmlFor="interpreterWriterName" className="block text-sm font-medium text-amber-800 mb-1">
                                        Interpreter Writer's Name
                                    </label>
                                    <input
                                        id="interpreterWriterName"
                                        type="text"
                                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800 mb-2"
                                        {...register("interpreterWriterName")}
                                    />
                                </div>

                                {/* Writer Nationality */}
                                <div>
                                    <label htmlFor="writerNationality" className="block text-sm font-medium text-amber-800 mb-1">
                                        Select Original Writer's nationality
                                    </label>
                                    <Controller
                                        name="writerNationality"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={writersNationality}
                                                placeholder="Select Writer's Nationality"
                                                isClearable
                                                isSearchable
                                                // styles={customSelectStyles}
                                                className="text-amber-800"
                                            />
                                        )}
                                    />
                                </div>

                                {/* Genre & Publication */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="bookGenre" className="block text-sm font-medium text-amber-800 mb-1">
                                            Genre
                                        </label>
                                        <Controller
                                            name="bookGenre"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    options={bookGenres}
                                                    placeholder="Select Genre"
                                                    isClearable
                                                    isSearchable
                                                    // styles={customSelectStyles}
                                                    className="text-amber-800"
                                                />
                                            )}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="publication" className="block text-sm font-medium text-amber-800 mb-1">
                                            Publication
                                        </label>
                                        <input
                                            id="publication"
                                            type="text"
                                            className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                                            {...register("publication", { required: true })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Personalized Information Section */}
                        <div className="bg-white rounded-lg border border-amber-200 overflow-hidden">
                            <div className="bg-amber-100 px-6 py-3">
                                <h3 className="text-lg font-semibold text-amber-800">Personalized Information</h3>
                            </div>

                            <div className="p-6 space-y-4">
                                {/* Have Book & Reading Status */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="bookHave" className="block text-sm font-medium text-amber-800 mb-1">
                                            Have the book?
                                        </label>
                                        <Controller
                                            name="bookHave"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    options={yesOrNo}
                                                    placeholder="Yes or No"
                                                    // styles={customSelectStyles}
                                                    className="text-amber-800"
                                                />
                                            )}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="bookReaded" className="block text-sm font-medium text-amber-800 mb-1">
                                            Reading Status
                                        </label>
                                        <Controller
                                            name="bookReaded"
                                            control={control}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    options={readingStatus}
                                                    placeholder="Select Status"
                                                    // styles={customSelectStyles}
                                                    className="text-amber-800"
                                                />
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Book's Condition */}
                                <div>
                                    <label htmlFor="bookCondition" className="block text-sm font-medium text-amber-800 mb-1">
                                        Book's Condition
                                    </label>
                                    <Controller
                                        name="bookCondition"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={bookConditions}
                                                placeholder="Select Book's Condition..."
                                                isClearable
                                                isSearchable
                                                // styles={customSelectStyles}
                                                className="text-amber-800"
                                            />
                                        )}
                                    />
                                </div>

                                {/* Book's Origin */}
                                <div>
                                    <label htmlFor="bookOrigin" className="block text-sm font-medium text-amber-800 mb-1">
                                        Book's Origin
                                    </label>
                                    <Controller
                                        name="bookOrigin"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={bookOrigins}
                                                placeholder="Select Book's Origin..."
                                                isClearable
                                                isSearchable
                                                // styles={customSelectStyles}
                                                className="text-amber-800"
                                            />
                                        )}
                                    />
                                </div>

                                {/* Acquired Date */}
                                <div>
                                    <label htmlFor="acquired_date" className="block text-sm font-medium text-amber-800 mb-1">
                                        Acquired Date
                                    </label>
                                    <input
                                        id="acquired_date"
                                        type="date"
                                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                                        {...register("acquired_date")}
                                    />
                                </div>

                                {/* Buying Details */}
                                <div>
                                    <label className="block text-sm font-medium text-amber-800 mb-1">Buying Details</label>
                                    <div className="space-y-2">
                                        <div>
                                            <label htmlFor="boughfrom" className="block text-sm text-amber-700 mb-1">
                                                Bought from:
                                            </label>
                                            <input
                                                id="boughfrom"
                                                type="text"
                                                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                                                {...register("boughfrom")}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="bookPrice" className="block text-sm text-amber-700 mb-1">
                                                Price:
                                            </label>
                                            <input
                                                id="bookPrice"
                                                type="number"
                                                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                                                {...register("bookPrice")}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Received as gift */}
                                <div>
                                    <label htmlFor="receivedAsGift" className="block text-sm font-medium text-amber-800 mb-1">
                                        Received as a gift?
                                    </label>
                                    <Controller
                                        name="receivedAsGift"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={yesOrNo}
                                                placeholder="Yes or No"
                                                // styles={customSelectStyles}
                                                className="text-amber-800 mb-2"
                                            />
                                        )}
                                    />
                                    <input
                                        id="receivedGiftFrom"
                                        type="text"
                                        placeholder="Received From..."
                                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                                        {...register("receivedGiftFrom")}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium flex items-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AddBooks;