const Footer = () => {
    return (
        <footer>
            {/* Gauche — nom + phrase */}
            <div>
                <p style={{ color: "#f0ede6", fontSize: "20px", fontWeight: 600 }}>
                    Zéïnab Aly Camara
                </p>
                <p style={{ color: "#a8a4a4", fontSize: "13px", marginTop: "2px", fontStyle: "italic" }}>
                    En cours de construction, comme moi.
                </p>
            </div>

            {/* Centre — stack */}
            <p style={{ color: "#f0ede6", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Built with React & TypeScript
            </p>

            {/* Droite — liens + année */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <a
                    href="https://github.com/ZeinabAly"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#555", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#f0ede6")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#a09f9f")}
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/zeinabaly"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#f0ede6", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#f0ede6")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#f0ede6")}
                >
                    LinkedIn
                </a>
                <span style={{ color: "#f0ede6", fontSize: "13px" }}>&copy; 2026</span>
            </div>
        </footer>
    )
}

export default Footer