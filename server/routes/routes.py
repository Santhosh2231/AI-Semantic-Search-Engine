

from controllers.semanticSearch import semanticSearch

def semantic_search_routes(api):
    api.add_resource(semanticSearch,"/api/search");

