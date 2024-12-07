export function GradientBackground({ children }: { children: React.ReactNode }) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-800 to-white flex items-center justify-center">
        {children}
      </div>
    );
  }
  