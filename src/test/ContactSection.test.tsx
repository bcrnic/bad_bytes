import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactSection } from "../components/sections/ContactSection";
import { expect, vi, describe, it, beforeEach } from "vitest";

// Mock the toaster
vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

describe("ContactSection", () => {
  it("renders the contact form", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/Ime/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Poruka/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Pošaljite poruku/i })).toBeInTheDocument();
  });

  it("shows validation errors on empty submission", async () => {
    render(<ContactSection />);
    const submitButton = screen.getByRole("button", { name: /Pošaljite poruku/i });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Ime mora imati bar 2 karaktera/i)).toBeInTheDocument();
      expect(screen.getByText(/Unesite validnu email adresu/i)).toBeInTheDocument();
      expect(screen.getByText(/Poruka mora imati bar 10 karaktera/i)).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
    render(<ContactSection />);
    
    fireEvent.change(screen.getByLabelText(/Ime/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Poruka/i), { target: { value: "This is a test message for the studio." } });
    
    const submitButton = screen.getByRole("button", { name: /Pošaljite poruku/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Šaljem.../i)).toBeInTheDocument();
    });
  });
});
