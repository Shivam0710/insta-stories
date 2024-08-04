# Insta Stories

A simplified version of Instagram Stories built with TypeScript, React.js, and Next.js.

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your_username/insta-stories.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. To run the tests:
    ```bash
    npm run test
    ```

## Design Choices

- **Next.js**: For server-side rendering and static site generation.
- **Tailwind CSS**: For utility-first CSS styling.
- **Axios**: For data fetching.
- **Next/Image**: For image optimization and caching.
- **Uploadcare**: To compress and serve images optimized for the web in AVIF format.
- **Vercel**: For hosting the web app.
- **localStorage**: To store user-level information regarding viewed stories.
- **Next.js API Routes**: For fetching stories.
- **TypeScript**: For type checking.
- **Jest**: For testing the code.

## Key UI/UX Highlights

- Simple and straightforward design focusing on ease of use.
- Users can view stories similar to Instagram Stories with an intuitive interface.
- Click on a story to view it in full-screen mode.
- Viewed stories are marked with gray borders.
- New stories are highlighted with gradient borders.
- Viewed stories are stored in localStorage to indicate they have been seen.
- If a user has viewed only one story from another user, clicking on that user's story will show only the unviewed stories.
- Animations enhance the user experience.
- Slide animations are used when switching between different users' stories.
- CDN caching and serving of highly compressed AVIF images.


## Assumptions

- The API that fetches real-time stories is hard-coded for now.