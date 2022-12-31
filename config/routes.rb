Rails.application.routes.draw do
  
  
  resources :secret_spots
  resources :users
  resources :visits

    # routes to handle user
    # post "/signup", to: "users#create" 
    get "/me", to: "users#show"
  
  # routes to handle sessions login and logout
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
