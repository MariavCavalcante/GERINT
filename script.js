window.LeitorCampos = {
  window.Dashboard = {

    chartMacro: null,

    atualizar(resultados) {

        const especialidades =
            new Set(
                resultados
                    .map(
                        resultado =>
                            Normalizador.texto(
                                resultado.especialidade
                            )
                    )
                    .filter(Boolean)
            ).size;

        const unidades =
            new Set(
                resultados
                    .map(
                        resultado =>
                            Normalizador.unidade(
                                resultado.unidade
                            )
                    )
                    .filter(Boolean)
            ).size;

        const municipios =
            new Set(
                resultados
                    .map(
                        resultado =>
                            Normalizador.texto(
                                resultado.municipioExecutante
                            )
                    )
                    .filter(Boolean)
            ).size;

        const distancias =
            resultados
                .map(
                    resultado =>
                        resultado.distancia
                )
                .filter(Number.isFinite);

        const media =
            distancias.length
                ? distancias.reduce(
                    (total, valor) =>
                        total + valor,
                    0
                ) / distancias.length
                : null;

        document.getElementById(
            "kpiEspecialidades"
        ).textContent =
            especialidades;

        document.getElementById(
            "kpiUnidades"
        ).textContent =
            unidades;

        document.getElementById(
            "kpiMunicipios"
        ).textContent =
            municipios;

        document.getElementById(
            "kpiMenorDistancia"
        ).textContent =
            distancias.length
                ? `${Math.min(
                    ...distancias
                ).toFixed(1)} km`
                : "--";

        document.getElementById(
            "kpiMediaDistancia"
        ).textContent =
            media !== null
                ? `${media.toFixed(1)} km`
                : "--";

        const dentro =
            resultados.filter(
                resultado =>
                    resultado.referencia ===
                    "Dentro da Macro"
            ).length;

        const fora =
            resultados.length -
            dentro;

        document.getElementById(
            "kpiDentroMacro"
        ).textContent =
            dentro;

        this.atualizarGraficoMacro(
            dentro,
            fora
        );
    },

    atualizarGraficoMacro(
        dentro,
        fora
    ) {

        if (this.chartMacro) {
            this.chartMacro.destroy();
        }

        const canvas =
            document.getElementById(
                "chartMacro"
            );

        this.chartMacro =
            new Chart(
                canvas,
                {
                    type: "doughnut",

                    data: {
                        labels: [
                            "Dentro da Macro",
                            "Fora da Macro"
                        ],

                        datasets: [
                            {
                                data: [
                                    dentro,
                                    fora
                                ],

                                backgroundColor: [
                                    "#037770",
                                    "#6c757d"
                                ],

                                borderWidth: 0
                            }
                        ]
                    },

                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: "67%",

                        plugins: {
                            legend: {
                                position: "bottom"
                            }
                        }
                    }
                }
            );
    }
};
document.addEventListener(
    "DOMContentLoaded",
    () => {
        app.restaurarTema();
        app.init();
    }
);
