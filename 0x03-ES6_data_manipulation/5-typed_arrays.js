const createInt8TypedArray = (length, position, value) => {
    const buffer = new ArrayBuffer(length);
    const int8Array = new Int8Array(buffer);
    if (position >= 0 && position < length) {
        int8Array[position] = value;
        return buffer;
      } else {
        throw new Error("Position outside range");
      }
}

export default createInt8TypedArray