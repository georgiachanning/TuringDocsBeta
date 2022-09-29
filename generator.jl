using MultiDocumenter

clonedir = mktempdir()

docs = [
    ("TuringLang/DynamicPPL.jl.git", "gh-pages") => MultiDocumenter.MultiDocRef(
        upstream = joinpath(clonedir, "ppl"),
        path = "ppl",
        name = "DynamicPPL"
    ),
    ("TuringLang/AdvancedHMC.jl.git", "gh-pages") => MultiDocumenter.MultiDocRef(
        upstream = joinpath(clonedir, "hmc"),
        path = "hmc",
        name = "AdvancedHMC"
    ),
    ("TuringLang/NestedSamplers.jl.git", "gh-pages") => MultiDocumenter.MultiDocRef(
        upstream = joinpath(clonedir, "ns"),
        path = "ns",
        name = "NestedSamplers"
    ),
    ("TuringLang/MCMCChains.jl.git", "gh-pages") => MultiDocumenter.MultiDocRef(
        upstream = joinpath(clonedir, "mcmcc"),
        path = "mcmcc",
        name = "MCMCChains"
    ),
]

# using SSH for cloning is suggested when you're dealing with private repos, because
# an ssh-agent will handle your keys for you
# prefix = "git@github.com:"
prefix = "https://github.com/"

for ((remote, branch), docref) in docs
    docref.upstream
    run(`git clone --depth 1 $prefix$remote --branch $branch --single-branch $(docref.upstream)`)
end

outpath = joinpath(@__DIR__, "docs")

MultiDocumenter.make(
    outpath,
    collect(last.(docs));
    search_engine = MultiDocumenter.SearchConfig(
        index_versions = ["stable"],
        engine = MultiDocumenter.FlexSearch
    )
)

run(Cmd(`touch .nojekyll`, dir=outpath))

