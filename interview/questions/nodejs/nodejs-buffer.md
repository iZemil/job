# What is a Buffer in NodeJS?

Buffer global class is used for storing the raw data in an array of integers. But it corresponds to a raw memory allocation that is located outside the V8 heap. Buffer class is used because pure JavaScript is not compatible with binary data. So, when dealing with TCP streams or the file system, it’s necessary to work with Buffers.