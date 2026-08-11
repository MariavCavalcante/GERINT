window.Normalizador = {

    texto(valor) {
        return String(valor ?? "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[–—-]/g, " ")
            .replace(/[^A-Za-z0-9\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .toUpperCase();
    },

    numero(valor) {

        if (
            valor === null ||
            valor === undefined ||
            valor === ""
        ) {
            return null;
        }

        let texto = String(valor)
            .trim()
            .replace(/\s/g, "")
            .replace(/[^\d,.-]/g, "");

        if (
            texto.includes(",") &&
            texto.includes(".")
        ) {
            texto = texto
                .replace(/\./g, "")
                .replace(",", ".");
        } else {
            texto = texto.replace(",", ".");
        }

        const numero = Number(texto);

        return Number.isFinite(numero)
            ? numero
            : null;
    },

    unidade(valor) {

        const limpo = this.texto(valor);

        if (!limpo) {
            return "";
        }

        return (
            window.CONFIG.HOSPITAL_ALIASES[limpo] ||
            limpo
        );
    },

    acharCampo(objeto, nomes) {

        if (!objeto) {
            return "";
        }

        const entradas = Object.entries(objeto);

        for (const nome of nomes) {

            const alvo = this.texto(nome);

            const encontrado = entradas.find(
                ([chave]) =>
                    this.texto(chave) === alvo
            );

            if (encontrado) {
                return encontrado[1];
            }
        }

        return "";
    },

    escaparHtml(valor) {

        return String(valor ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }
};
