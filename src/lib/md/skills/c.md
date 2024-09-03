# C

## Overview
C is a foundational programming language known for its efficiency and control over system resources. As one of the earliest high-level programming languages, C has significantly influenced many modern languages and is widely used in system programming, embedded systems, and performance-critical applications.

## My Experience with C
C was my first programming language that I truly learned, providing me with a solid foundation in programming concepts. My academic experience with C covered both fundamental and advanced topics, allowing me to grasp core programming principles and system-level operations.

### Key Competencies
- **Understanding Pointers**: Developed a robust understanding of pointers, a concept that many programmers find challenging. This includes pointer arithmetic, dynamic memory management, and using pointers effectively to manipulate data.
- **Memory Management**: Gained hands-on experience with dynamic memory allocation, deallocation, and memory management techniques.
- **Data Structures**: Implemented and used various data structures such as arrays, linked lists, stacks, and queues.

## Project-Specific Example

### 1. Academic Projects
Worked on several projects during my studies that deepened my understanding of C and its applications, from simple algorithms to complex system-level tasks.

#### Example Code Block
```c
// Example code block - Simple C Program to Reverse an Array

#include <stdio.h>

void reverseArray(int arr[], int size) {
    int start = 0;
    int end = size - 1;
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);

    reverseArray(arr, size);

    printf("Reversed Array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
