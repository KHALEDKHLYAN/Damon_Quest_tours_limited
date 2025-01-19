declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string;
      WHATSAPP_API_KEY?: string;
      WHATSAPP_PHONE_NUMBER?: string;
      EMAIL_SERVICE_API_KEY?: string;
      EMAIL_FROM_ADDRESS?: string;
      STRIPE_PUBLIC_KEY?: string;
      STRIPE_SECRET_KEY?: string;
      DATABASE_URL?: string;
      NEXTAUTH_SECRET?: string;
      NEXTAUTH_URL?: string;
      CLOUD_STORAGE_API_KEY?: string;
      CLOUD_STORAGE_BUCKET?: string;
      FACEBOOK_API_KEY?: string;
      INSTAGRAM_API_KEY?: string;
      TWITTER_API_KEY?: string;
      GOOGLE_ANALYTICS_ID?: string;
    }
  }
}

export {}

