window.RankingMotor = {

    calcular(filtros, unidades, distancias) {

        const especialidade =
            Normalizador.texto(
                filtros.especialidade
            );

        const leito =
            Normalizador.texto(
                filtros.tipoLeito
            );

        const complexidade =
            Normalizador.texto(
                filtros.complexidade
            );

        const termo =
            Normalizador.texto(
                filtros.particularidade
            );

        const origem =
            Normalizador.texto(
                filtros.municipioSolicitante
            );

        const distanciaMaxima =
            filtros.distanciaMaxima
                ? Number(filtros.distanciaMaxima)
                : null;

        const registroOrigem =
            distancias.find(
                registro =>
                    Normalizador.texto(
                        LeitorCampos.municipioSolicitante(
                            registro
                        )
                    ) === origem
            );

        const macroOrigem =
            Normalizador.texto(
                LeitorCampos.macroSolicitante(
                    registroOrigem || {}
                )
            );

        let resultados =
            unidades.filter(
                unidade =>
                    Normalizador.texto(
                        LeitorCampos.especialidade(
                            unidade
                        )
                    ) === especialidade
            );

        if (leito) {
            resultados =
                resultados.filter(
                    unidade =>
                        Normalizador.texto(
                            LeitorCampos.tipoLeito(
                                unidade
                            )
                        ) === leito
                );
        }

        if (complexidade) {
            resultados =
                resultados.filter(
                    unidade =>
                        Normalizador.texto(
                            LeitorCampos.complexidade(
                                unidade
                            )
                        ) === complexidade
                );
        }

        if (termo) {
            resultados =
                resultados.filter(
                    unidade =>
                        Normalizador.texto(
                            LeitorCampos.particularidades(
                                unidade
                            )
                        ).includes(termo)
                );
        }

        const enriquecidos =
            resultados.map(unidade => {

                const unidadeNormalizada =
                    Normalizador.unidade(
                        LeitorCampos.unidade(unidade)
                    );

                let municipioExecutante =
                    LeitorCampos.municipioExecutante(
                        unidade
                    );

                let registroDistancia = null;

                if (municipioExecutante) {

                    const destino =
                        Normalizador.texto(
                            municipioExecutante
                        );

                    registroDistancia =
                        distancias.find(
                            distancia =>
                                Normalizador.texto(
                                    LeitorCampos.municipioSolicitante(
                                        distancia
                                    )
                                ) === origem &&
                                Normalizador.texto(
                                    LeitorCampos.municipioExecutante(
                                        distancia
                                    )
                                ) === destino
                        );
                }

                if (!registroDistancia) {

                    registroDistancia =
                        distancias.find(
                            distancia =>
                                Normalizador.texto(
                                    LeitorCampos.municipioSolicitante(
                                        distancia
                                    )
                                ) === origem &&
                                Normalizador.unidade(
                                    LeitorCampos.unidade(
                                        distancia
                                    )
                                ) === unidadeNormalizada
                        );
                }

                if (
                    !municipioExecutante &&
                    registroDistancia
                ) {
                    municipioExecutante =
                        LeitorCampos.municipioExecutante(
                            registroDistancia
                        );
                }

                const distanciaKm =
                    Normalizador.numero(
                        LeitorCampos.distancia(
                            registroDistancia || {}
                        )
                    );

                const macroExecutante =
                    LeitorCampos.macroExecutante(
                        registroDistancia || {}
                    );

                const dentroMacro =
                    Boolean(macroOrigem) &&
                    Normalizador.texto(
                        macroExecutante
                    ) === macroOrigem;

                let score = 70;

                if (dentroMacro) {
                    score += 10;
                }

                return {
                    bruto: unidade,

                    unidade:
                        LeitorCampos.unidade(unidade) ||
                        "Não informada",

                    municipioExecutante:
                        municipioExecutante ||
                        "Não identificado",

                    regiaoExecutante:
                        LeitorCampos.regiaoExecutante(
                            registroDistancia || {}
                        ) ||
                        "Não informada",

                    macroExecutante:
                        macroExecutante ||
                        "Não informada",

                    especialidade:
                        LeitorCampos.especialidade(
                            unidade
                        ) ||
                        "Não informada",

                    tipoLeito:
                        LeitorCampos.tipoLeito(
                            unidade
                        ) ||
                        "Não informado",

                    complexidade:
                        LeitorCampos.complexidade(
                            unidade
                        ) ||
                        "Não informada",

                    fluxo:
                        LeitorCampos.fluxo(
                            unidade
                        ) ||
                        "Não informado",

                    tipoAtendimento:
                        LeitorCampos.tipoAtendimento(
                            unidade
                        ) ||
                        "Não informado",

                    particularidades:
                        LeitorCampos.particularidades(
                            unidade
                        ) ||
                        "Não informadas",

                    coberturaSad:
                        LeitorCampos.coberturaSad(
                            unidade
                        ) ||
                        "Não informada",

                    distancia: distanciaKm,

                    referencia:
                        dentroMacro
                            ? "Dentro da Macro"
                            : "Fora da Macro",

                    score
                };
            });

        let filtrados = enriquecidos;

        if (
            Number.isFinite(distanciaMaxima)
        ) {
            filtrados =
                filtrados.filter(
                    resultado =>
                        resultado.distancia === null ||
                        resultado.distancia <=
                            distanciaMaxima
                );
        }

        const distanciasValidas =
            filtrados.filter(
                resultado =>
                    Number.isFinite(
                        resultado.distancia
                    )
            );

        const menorDistancia =
            distanciasValidas.length
                ? Math.min(
                    ...distanciasValidas.map(
                        resultado =>
                            resultado.distancia
                    )
                )
                : null;

        const maiorDistancia =
            distanciasValidas.length
                ? Math.max(
                    ...distanciasValidas.map(
                        resultado =>
                            resultado.distancia
                    )
                )
                : null;

        filtrados.forEach(resultado => {

            if (
                Number.isFinite(
                    resultado.distancia
                )
            ) {

                if (
                    menorDistancia ===
                    maiorDistancia
                ) {
                    resultado.score += 20;

                } else {

                    const proporcao =
                        1 -
                        (
                            (
                                resultado.distancia -
                                menorDistancia
                            ) /
                            (
                                maiorDistancia -
                                menorDistancia
                            )
                        );

                    resultado.score +=
                        Math.max(
                            0,
                            Math.min(
                                20,
                                proporcao * 20
                            )
                        );
                }
            }

            resultado.score =
                Math.max(
                    0,
                    Math.min(
                        100,
                        Math.round(
                            resultado.score
                        )
                    )
                );
        });

        return filtrados.sort(
            (a, b) => {

                if (
                    a.distancia === null &&
                    b.distancia !== null
                ) {
                    return 1;
                }

                if (
                    a.distancia !== null &&
                    b.distancia === null
                ) {
                    return -1;
                }

                if (
                    a.distancia !== null &&
                    b.distancia !== null &&
                    a.distancia !== b.distancia
                ) {
                    return (
                        a.distancia -
                        b.distancia
                    );
                }

                if (a.score !== b.score) {
                    return b.score - a.score;
                }

                return String(a.unidade)
                    .localeCompare(
                        String(b.unidade),
                        "pt-BR"
                    );
            }
        );
    }
};
