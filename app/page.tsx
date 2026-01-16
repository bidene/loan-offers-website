import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LoanTypes } from "@/components/loan-types"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { Partners } from "@/components/partners"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen">
        <Header />
        <Suspense fallback={<Skeleton className="w-full h-screen" />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-96" />}>
          <Partners />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-screen" />}>
          <LoanTypes />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-96" />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-96" />}>
          <Benefits />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-screen" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-96" />}>
          <CTA />
        </Suspense>
        <Footer />
      </main>
    </>
  )
}
