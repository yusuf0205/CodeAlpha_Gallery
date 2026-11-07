# React Photo Gallery

Responsive image gallery web application built with React (`src/component/PhotoGallery.jsx`).

## Features

- **Grid Layout with Pagination**: Displays 12 images per page (`2 rows x 6 columns`) with page navigation controls.
- **Lightbox Modal Viewer**: Clicking any thumbnail opens a full-screen modal overlay to inspect the image.
- **Client-Side Image Upload**: Supports adding local image files dynamically into the active gallery state via file input.

## Repository Structure

| Path | Description |
| :--- | :--- |
| `src/component/PhotoGallery.jsx` | Core gallery component implementing pagination, lightbox state, and file uploads |
| `src/component/PhotoGallery.css` | Responsive grid and modal styling |
| `public/images/` | Default gallery image assets (`image1.png` to `image12.png`) |

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm start
```
