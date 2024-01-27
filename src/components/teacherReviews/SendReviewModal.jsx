import { Dialog } from '@headlessui/react'
import SendReviews from '@/components/teacherReviews/SendReviews'

export default function MyDialog({ isOpen, setIsOpen }) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-screen-md w-full rounded-md backdrop-blur-md bg-white/70 p-6">
          <Dialog.Title className="text-2xl text-black-dark font-semibold text-center mb-8">
            Crea tu Propia Reseña
          </Dialog.Title>
          <SendReviews />
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
