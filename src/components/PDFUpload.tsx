"use client"

import { useState, DragEvent } from "react"
import { FileUpIcon, X } from "lucide-react"

export default function PDFUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFile = (selectedFile: File) => {
    if (selectedFile.type === "application/pdf") {
      setFile(selectedFile)
    } else {
      alert("Please upload a PDF file only.")
    }
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleCancel = () => {
    setFile(null)
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`w-full max-w-2xl mx-auto 
                  rounded-2xl 
                  p-12 
                  text-center 
                  transition
                  ${isDragging ? "bg-[#FDECEC]" : "bg-[#F4EDED]"}`}
    >
      {/* ICON */}
      <div className="flex justify-center mb-6">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
          <FileUpIcon className="text-[#FF6652]" size={22} />
        </div>
      </div>

      {!file ? (
        <>
          {/* Upload UI */}
          <p className="text-lg font-medium text-gray-800">
            Drag & drop your PDF file here
          </p>

          <p className="mt-2 text-gray-600">
            or{" "}
            <label className="text-[#FF6652] underline cursor-pointer">
              Browse from Computer
              <input
                type="file"
                accept="application/pdf"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </p>
        </>
      ) : (
        <>
          {/* File Selected UI */}
          <div className="flex items-center justify-center gap-3">
            <p className="text-lg font-medium text-black">
              {file.name}
            </p>

            <button
              onClick={handleCancel}
              className="w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full"
            >
              <X size={14} />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
