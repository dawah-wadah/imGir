Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    # resources :posts, only: %i[inde show]
    resources :posts do
      resources :comments, only: %i[index]
    end
    resources :votes, only: %i[create update destroy]
    resources :comments, only: %i[index create edit destroy show]
    resources :images
    resources :users, only: %i[create show] do
      resources :comments, only: [:index]
    end
    resource :session, only: %i[create destroy show]
    resources :search, only: %i[index]
  end

  root 'static_pages#root'
end
