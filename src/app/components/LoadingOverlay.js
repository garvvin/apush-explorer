export default function LoadingOverlay({ loading }) {
  if (loading) {
    return <div className="loading-overlay"></div>;
  }

  return null;
}
