# What is a Stream in NodeJS?

Stream is the collection of data similar to arrays and strings. They are objects using which you can read data from a source or write data to a destination in a continuous manner. It might not be available at once and need not to have fit in the memory. These streams are especially useful for reading and processing a large set of data.

In Node.js, there are four fundamental types of streams:

1. *Readable:* for reading large chunks of data from the source.
2. *Writable:* for writing large chunks of data to the destination.
3. *Duplex:* for both the functions - read and write.
4. *Transform:* It is a duplex stream that is used for modifying the data.
